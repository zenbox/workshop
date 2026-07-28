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

// 1. ES Modul Importe
import http from "node:http";
// require "http";


// 2. Variablendeklaration und Konfiguration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// 3. Funktionen
const handleRequest = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello ");
    response.write("World ");
    response.end();
};

// 4. Programmausführung (Event-getrieben)
const server = http.createServer(handleRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server ${HOST} is listening on port ${PORT}`);
});
