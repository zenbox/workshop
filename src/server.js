/**
 * Hallo Welt als express-Webservice
 * in moderner ES6+ Architektur (import, export)
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const HOST = "localhost";
export const PORT = 3000;

// - - - - - - - - - -
export function createApp () {
    const app = express();

    // App mit mit statischer Express-Route ausrüsten
    app.use(express.static(path.join(__dirname, "./../static")));

    // Template-System anmelden
    app.set("views", path.join(__dirname, "./views"));
    app.set("view engine", "twig");

    // Dynamische Routen
    app.get("/page-2", (req, res) => {
        res.render("page-2", { message: "Hello from the server!" });
    });

    return app;
}
//- - - - - - - - - -
export function startServer() {
    
    // kein Singleton, möglicherweise ein Problem ...
    const app = createApp();

    return app.listen(PORT, HOST, () => {
        console.log(`Server (very new) running at http://${HOST}:${PORT}/`);
    });
}
// - - - - - - - - - -