// native node.js Module
import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";

// npm Libs
import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";

// Eigene libs / eigene Module
import { createChuckRouter } from "./routes/chuck.route.js";

import { Database, seedDemoUsers } from "./db/index.js";
import { SheepModel } from "./models/sheep-model.js";
import { UserModel } from "./models/user-model.js";
import { AuthController } from "./controllers/auth-controller.js";
import { createAuthRouter } from "./routes/auth.js";
import {
    createOriginCheck,
    requireAuth,
    requireCsrf,
} from "./middleware/auth.js";
import { HerdController } from "./controllers/herd.controller.js";
import { createHerdRouter } from "./routes/herd.routes.js";

import { SqliteSessionStore } from "./db/sqliteSessionStore.js";
import { createSessionMiddleware } from "./middleware/session.js";
import { createSocketAccess } from "./middleware/socket-auth.js";

// import { errorHandler } from "./middleware/errorHandler.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const HOST = "localhost";
export const PORT = 3010;
export const DB_FILE = path.join(__dirname, "..", "data", "workshop.sqlite");

const GENDER_LABELS = { female: "weiblich", male: "männlich" };
const LIVE_HISTORY_LIMIT = 100;

// Baut die App mit injiziertem Model, startet aber keinen Server
// Für die Mehrbenutzerfähigkeit wird eine Publish-Funktion übergeben, die Ereignisse an die Clients weiterleitet.

/*
Laufende Prozesse im Betriebssystem
Node-Prozesse, z. B. der Server:

Windows (PowerShell): Get-Process node
macOS/Linux: ps aux | grep node */

export function createApp({
    sheepModel,
    userModel,
    publish = () => {},
    sessionStore,
    sessionMiddleware,
    origin = "http://localhost:3000",
    onSessionEnd,
}) {
    const app = express();

    // Statische Dateien aus static/
    app.use(express.static(path.join(__dirname, "..", "static")));

    // JSON-Body für die REST-API, begrenzt auf 16 KiB
    app.use(express.json({ limit: "16kb" }));

    app.use(
        sessionMiddleware ??
            createSessionMiddleware({
                store: sessionStore,
                secret: process.env.SESSION_SECRET,
            })
    );

    // Twig-Templates aus src/views
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "twig");

    app.get("/page-2", (req, res) => {
        res.render("page-2", { message: "Hallo vom Server!" });
    });

    app.use("/chuck", createChuckRouter());

    // ? delete: >>>>>>>>>>
    app.get("/demo/zaehler", (req, res) => {
        req.session.zaehler = (req.session.zaehler ?? 0) + 1;
        res.json({ zaehler: req.session.zaehler });
    });
    // ? <<<<<<<<<<

    // Verdrahtung: Model -> Controller -> Router
    const originCheck = createOriginCheck(origin);
    const authController = new AuthController({ userModel, onSessionEnd });
    app.use("/auth", createAuthRouter(authController, originCheck));
    const herdController = new HerdController({ sheepModel, publish });
    app.use(
        "/herd",
        requireAuth,
        originCheck,
        requireCsrf,
        createHerdRouter(herdController)
    );

    // ? delete: >>>>>>>>>>
    // Fehler-Handler immer zuletzt registrieren
    app.use((err, req, res, next) => {
        const [statusCode, message] = {
            "entity.too.large": [413, "Anfrage zu gross."],
            "entity.parse.failed": [400, "Ungueltiges JSON."],
        }[err.type] ?? [500, "Interner Fehler"];
        res.status(statusCode).json({ error: message });
    });

    // app.use(errorHandler);

    return app;
}

// Öffnet zuerst die Datenbank, danach startet der HTTP-Listener
export async function startServer({
    host = HOST,
    port = PORT,
    dbFile = DB_FILE,
    sessionSecret = process.env.SESSION_SECRET,
    origin = process.env.APP_ORIGIN ?? `http://${host}:${port}`,
    demoUsers = process.env,
} = {}) {
    const database = await Database.open(dbFile);
    const sheepModel = new SheepModel(database);
    const userModel = new UserModel(database);

    const sessionStore = new SqliteSessionStore(database.db);
    let sessionMiddleware;
    try {
        await seedDemoUsers(database.db, demoUsers);
        await sessionStore.cleanup();
        sessionMiddleware = createSessionMiddleware({
            store: sessionStore,
            secret: sessionSecret,
        });
    } catch (error) {
        await database.close();
        throw error;
    }

    let io;
    let socketAccess;
    const activityHistory = [];
    const chatHistory = [];
    const onlineUsers = new Map();
    const userNames = new Map();
    const userNameFor = (userId) => userNames.get(userId) ?? `User ${userId}`;

    const broadcastPresence = () =>
        socketAccess.emit(
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
        socketAccess.emit("activity:message", activity);
    };

    const publish = (userId, action, sheep, userName) =>
        announceActivity({
            type: "sheep",
            userId,
            userName,
            action,
            sheepName: sheep.name,
            sheep: {
                id: sheep.id,
                userId,
                ownerName: userName,
                name: sheep.name,
                breed: sheep.breed,
                age: sheep.age,
                gender: sheep.gender,
                genderLabel: GENDER_LABELS[sheep.gender] ?? sheep.gender,
            },
            createdAt: new Date().toISOString(),
        });

    const app = createApp({
        sheepModel,
        userModel,
        publish,
        sessionStore,
        sessionMiddleware,
        origin,
        onSessionEnd: (sessionId) => socketAccess?.disconnectSession(sessionId),
    });

    // ! [Registriert Express vor Socket.IO, damit dessen Request-Wrapper es nur als Fallback aufruft]
    const httpServer = http.createServer(app);
    io = new SocketServer(httpServer, {
        allowRequest: (req, callback) =>
            callback(
                null,
                !req.headers.origin || req.headers.origin === origin
            ),
    });
    socketAccess = createSocketAccess({
        io,
        sessionMiddleware,
        sessionStore,
        origin,
    });

    // Wenn irgendein Client versucht über `ws://`zu verbinden
    io.on("connection", (socket) => {
        const { userId, userName } = socket.data;
        userNames.set(userId, userName);
        const connections = onlineUsers.get(userId) ?? 0;

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
            socketAccess.emit("chat:message", message);
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
    const server = httpServer;
    try {
        await new Promise((resolve, reject) => {
            server.once("error", reject);
            server.listen(port, host, () => {
                server.off("error", reject);
                resolve();
            });
        });
    } catch (error) {
        io.close();
        await database.close();
        throw error;
    }
    console.log(`Server running at http://${host}:${server.address().port}/`);
    return { server, database, io, sessionStore };
}
