import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { Database } from "./db/index.js";
import { SheepModel } from "./models/sheep-model.js";
import { HerdController } from "./controllers/herd.controller.js";
import { createHerdRouter } from "./routes/herd.routes.js";

import http from "node:http";
import { Server as SocketServer } from "socket.io";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const HOST = "localhost";
export const PORT = 3000;
export const DB_FILE = path.join(__dirname, "..", "data", "workshop.sqlite");

const DEMO_USER_ID = 1;
const KNOWN_USER_IDS = [1, 2];
const roomFor = ({ userId }) => `user: ${userId}`;

// Baut die App mit injiziertem Model, startet aber keinen Server
// Für die Mehrbenutzerfähigkeit wird eine Publish-Funktion übergeben, die Ereignisse an die Clients weiterleitet.
export function createApp({ sheepModel, publish = () => {} } = {}) {
    const app = express();

    // Statische Dateien aus static/
    app.use(express.static(path.join(__dirname, "..", "static")));

    // >>>>>>>
    // JSON-Body für die REST-API, begrenzt auf 16 KiB
    app.use(express.json({ limit: "16kb" }));
    // <<<<<<<

    // Twig-Templates aus src/views
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "twig");

    app.get("/page-2", (req, res) => {
        res.render("page-2", { message: "Hallo vom Server!" });
    });

    // Verdrahtung: Model -> Controller -> Router
    const herdController = new HerdController({ sheepModel, publish });
    app.use("/herd", createHerdRouter(herdController));

    // Fehler-Handler immer zuletzt registrieren
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(500).send("Interner Fehler");
    });

    return app;
}

// Öffnet zuerst die Datenbank, danach startet der HTTP-Listener
export async function startServer({
    host = HOST,
    port = PORT,
    dbFile = DB_FILE,
} = {}) {
    const database = await Database.open(dbFile);
    const sheepModel = new SheepModel(database);

    // Schultern des Socket-Servers an einen neuen HTTP-Server
    const httpServer = http.createServer();
    const io = new SocketServer(httpServer);

    const publish = (userId) => io.to(roomFor(userID)).emit("sheep:changed");

    const app = createApp({ sheepModel, publish });

    // Verküpfen beider https-Services)
    httpServer.on("request", app);

    // Wenn irgendein Client versucht über `ws://`zu verbinden
    io.on("connection", (socket) => {
        const requested = Number(socket.handshake.auth?.userId);
        const userId = KNOWN_USER_IDS.includes(requested)
            ? requested
            : DEMO_USER_ID;

        socket.join(roomFor({ userId }));
    });

    const server = app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
    });

    return { server, database, io };
}
