import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { Database } from "./db/index.js";
import { SheepModel } from "./models/sheep-model.js";

// >>>>>>>
import { HerdController } from "./controllers/herd.controller.js";
import { createHerdRouter } from "./routes/herd.routes.js";
// <<<<<<<

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const HOST = "localhost";
export const PORT = 3000;
export const DB_FILE = path.join(__dirname, "..", "data", "workshop.sqlite");

// Baut die App mit injiziertem Model, startet aber keinen Server
export function createApp({ sheepModel } = {}) {
    const app = express();

    // Statische Dateien aus static/
    app.use(express.static(path.join(__dirname, "..", "static")));

    // Twig-Templates aus src/views
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "twig");

    app.get("/page-2", (req, res) => {
        res.render("page-2", { message: "Hallo vom Server!" });
    });

    // >>>>>>>
    // Verdrahtung: Model -> Controller -> Router
    const herdController = new HerdController({ sheepModel });
    app.use("/herd", createHerdRouter(herdController));
    // <<<<<<<

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
    const app = createApp({ sheepModel });

    const server = app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
    });

    return { server, database };
}
