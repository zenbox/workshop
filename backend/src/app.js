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

// 1.2 Externe Libraries
import express from "express";
import cors from "cors";

// 1.3 Eigene Module – ergänzen
import loginRoute from "./routes/loginRoute.js";
import sheepRoute from "./routes/sheepRoute.js";
import sheepApiRoute from "./routes/sheepApiRoute.js"; // ← NEU

// 2.1 Variablendeklaration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

// 2.2 Konfiguration
// Cross Origin Policy setzen
app.use(cors({ origin: true, credentials: true }));

// Statische Route für alles, was der Server ausliefern soll, ohne Middleware!
app.use(express.static(path.resolve("./static")));

// JSON-Parser für body-Daten setzen
app.use(express.json()); // früher: body_parser als externes Modul
// application/x-www-form-urlencoded setzen und komplexe Daten parsen,
// ist Pflicht bei POST forms-Requests
app.use(express.urlencoded({ extended: true }));

// Templating setzen
app.set("view engine", "ejs"); // "pug", "mustache", "handlebars"
app.set("views", path.resolve("./src/views"));

// - - - - - - - - - -
// - - - - - - - - - -

// Main Routes
// Main Routes
app.use("/login", loginRoute);
app.use("/sheep", sheepRoute); // EJS-Views bleiben
app.use("/api/sheeps", sheepApiRoute); // ← NEU REST API

// // 3. Funktionen
// const handleRequest = (request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello ");
//     response.write("World ");
//     response.end();
// };

// // 4. Programmausführung (Event-getrieben)
// const server = http.createServer(handleRequest);

app.listen(PORT, () => {
    console.log(`Server ${HOST} is listening on port ${PORT}`);
});
