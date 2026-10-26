/** Webservice
 *
 * @description A simple webservice via http. We use Express, as everybody does.
 *
 * @package MySoftware
 * @module index
 * @author Michael Reichart <michael.reichart@gfu.net>
 * @version 1.0.0
 * @since 1.0.0 || 2026-07-27
 * @license MIT
 * @copyright ...
 */

// 0. Interpreter-Anweisung
"use strict";

// 1.1 ES Modul Importe von node-Bibliotheken
import http from "node:http";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// 1.2 Externe Libraries
import express from "express";
import { Server as SocketServer } from "socket.io";

// 1.3 Eigene Module
import authRoute from "./routes/authRoute.js";
import sheepApiRoute from "./routes/sheepApiRoute.js";
import { loadSession, readSessionCookie } from "./middleware/session.js";
import { errorHandler } from "./middleware/errors.js";
import authModel from "./models/authModel.js";
import db, { initializeDatabase } from "./models/db.js";

// 2.1 Variablendeklaration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";
const backendRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    ".."
);
const projectRoot = path.resolve(backendRoot, "..");

export function createApplication() {
    const app = express();
    const server = http.createServer(app);
    const io = new SocketServer(server);

    app.set("io", io);

    // Lernkontext 2.1: Express liefert die View unter demselben Origin wie die API.
    app.get("/", (_request, response) => {
        response.sendFile(
            path.join(projectRoot, "frontend", "weidebuch.nodejs.html")
        );
    });

    // Lernkontext 1.3: Der Health-Check prüft auch, ob SQLite erreichbar ist.
    app.get("/health", async (_request, response) => {
        await db.raw("SELECT 1");
        response.status(200).json({ status: "ok" });
    });

    app.use(express.static(path.join(backendRoot, "static")));
    app.use(express.json({ limit: "16kb" }));
    app.use(express.urlencoded({ extended: false, limit: "16kb" }));
    app.use(loadSession);

    io.use(async (socket, next) => {
        try {
            const sessionId = readSessionCookie(
                socket.handshake.headers.cookie
            );
            const session = await authModel.findSession(sessionId);
            if (!session) return next(new Error("Anmeldung erforderlich"));
            socket.data.userId = session.id;
            socket.data.sessionId = session.sessionId;
            next();
        } catch (error) {
            next(error);
        }
    });

    io.on("connection", async (socket) => {
        // Lernkontext 3.2: Nur der Server weist den authentifizierten Nutzerraum zu.
        await socket.join(`user:${socket.data.userId}`);
    });

    // Lernkontext 2.1: Routen ordnen HTTP-Methode und URL den Controllern zu.
    app.use("/api/auth", authRoute);
    app.use("/api/sheep", sheepApiRoute);
    app.use("/api/sheeps", sheepApiRoute);
    app.use(errorHandler);

    return { app, server, io };
}

export async function startServer() {
    await initializeDatabase();
    await authModel.removeExpiredSessions();
    const { server } = createApplication();
    server.listen(PORT, HOST, () => {
        console.log(`Weidebuch hört auf http://${HOST}:${PORT}`);
    });

    for (const signal of ["SIGINT", "SIGTERM"]) {
        process.once(signal, () => {
            server.close(async () => {
                await db.destroy();
                process.exit(0);
            });
        });
    }
}

if (
    process.argv[1] &&
    pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url
) {
    try {
        await startServer();
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}
