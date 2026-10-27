/**
 * Hallo Welt als http-Webservice
 * in moderner ES6+ Architektur (import, export)
 */

import http from "node:http";

const host = "localhost";
const port = 3000;

const server = http.createServer(
    
    (request, response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("hallo Welt\n");
    }

);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
