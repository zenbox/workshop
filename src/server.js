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
const USER_NAMES = new Map([
    [1, "Demo"],
    [2, "Jonas"],
]);
const GENDER_LABELS = { female: "weiblich", male: "männlich" };
const LIVE_HISTORY_LIMIT = 100;

function userNameFor(userId) {
    return USER_NAMES.get(userId) ?? `User ${userId}`;
}

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

    let io;
    const activityHistory = [];
    const chatHistory = [];
    const onlineUsers = new Map();
    const broadcastPresence = () =>
        io.emit(
            "presence:state",
            [...onlineUsers.keys()].map((id) => ({
                userId: id,
                userName: userNameFor(id),
            }))
        );

    const announceActivity = (activity) => {
        activityHistory.push(activity);
        if (activityHistory.length > LIVE_HISTORY_LIMIT)
            activityHistory.shift();
        io.emit("activity:message", activity);
    };

    const publish = (userId, action, sheep) =>
        announceActivity({
            type: "sheep",
            userId,
            userName: userNameFor(userId),
            action,
            sheepName: sheep.name,
            sheep: {
                id: sheep.id,
                userId,
                ownerName: userNameFor(userId),
                name: sheep.name,
                breed: sheep.breed,
                age: sheep.age,
                gender: sheep.gender,
                genderLabel: GENDER_LABELS[sheep.gender] ?? sheep.gender,
            },
            createdAt: new Date().toISOString(),
        });

    const app = createApp({ sheepModel, publish });
    // ! [Registriert Express vor Socket.IO, damit dessen Request-Wrapper es nur als Fallback aufruft]
    const httpServer = http.createServer(app);
    io = new SocketServer(httpServer);

    // Wenn irgendein Client versucht über `ws://`zu verbinden
    io.on("connection", (socket) => {
        const requested = Number(socket.handshake.auth?.userId);
        const userId = KNOWN_USER_IDS.includes(requested)
            ? requested
            : DEMO_USER_ID;
        const userName = userNameFor(userId);
        const connections = onlineUsers.get(userId) ?? 0;

        socket.data.userId = userId;
        socket.data.userName = userName;
        onlineUsers.set(userId, connections + 1);
        socket.emit("activity:history", activityHistory);
        socket.emit("chat:history", chatHistory);
        broadcastPresence();

        if (connections === 0) {
            announceActivity({
                type: "presence",
                action: "joined",
                userId,
                userName,
                createdAt: new Date().toISOString(),
            });
        }

        socket.on("chat:send", (rawText) => {
            if (typeof rawText !== "string") return;
            const text = rawText.trim();
            if (!text || text.length > 500) return;

            const message = {
                userId,
                userName,
                text,
                createdAt: new Date().toISOString(),
            };
            chatHistory.push(message);
            if (chatHistory.length > LIVE_HISTORY_LIMIT) chatHistory.shift();
            io.emit("chat:message", message);
        });

        socket.on("disconnect", () => {
            const activeConnections = onlineUsers.get(userId) ?? 1;
            if (activeConnections > 1) {
                onlineUsers.set(userId, activeConnections - 1);
                return;
            }

            onlineUsers.delete(userId);
            broadcastPresence();
            announceActivity({
                type: "presence",
                action: "left",
                userId,
                userName,
                createdAt: new Date().toISOString(),
            });
        });
    });

    // ! [Startet denselben HTTP-Server, an den Socket.IO und Express gebunden sind]
    const server = httpServer.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
    });

    return { server, database, io };
}
