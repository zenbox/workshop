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

// 1.3 Eigene Module (Libraries)
import loginRoute from "./routes/loginRoute.js";

// 2.1 Variablendeklaration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();

// 2.2 Konfiguration
// Statische Route für alles, was der Server ausliefern soll, ohne Middleware!
app.use(express.static(path.resolve("./static")));
// NICHT app.use(path.resolve("./static"));

// app.set

// Main Routes
app.use("/login", loginRoute);


// 3. Funktionen
const handleRequest = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello ");
    response.write("World ");
    response.end();
};

// // 4. Programmausführung (Event-getrieben)
// const server = http.createServer(handleRequest);

app.listen(PORT, () => {
    console.log(`Server ${HOST} is listening on port ${PORT}`);
});
