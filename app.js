/**
 * Hallo Welt als express-Webservice
 * in moderner ES6+ Architektur (import, export)
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const HOST = "localhost";
const PORT = 3000;

// - - - - - - - - - -

// App mit mit statischer Express-Route ausrüsten
app.use(express.static(path.join(__dirname, "static")));

// app.configure(function () {
// - - -
    // Template-System anmelden
    app.set("views", path.join(__dirname, "src/views"));
    app.set("view engine", "twig");
// - - -
// });
// - - - - - - - - - -
// Dynamische Routen
app.get("/page-2", (req, res) => {
    res.render("page-2", { message: "Hello from the server!" });
});
// - - - - - - - - - -

app.listen(PORT, HOST, () => {
    console.log(`Server (very new) running at http://${HOST}:${PORT}/`);
});
