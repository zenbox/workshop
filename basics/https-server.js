/*
mkdir certs
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -days 365 \
  -keyout certs/key.pem -out certs/cert.pem \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1"
*/

import https from "node:https";
import fs from "node:fs";

const host = "localhost";
const port = 3443;

const options = {
    key: fs.readFileSync(new URL("./certs/key.pem", import.meta.url)),
    cert: fs.readFileSync(new URL("./certs/cert.pem", import.meta.url)),
};

const server = https.createServer(options, (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("<h1>Hello World</h1>");
});

server.listen(port, host, () => {
    console.log(`a simple web service on https://${host}:${port}`);
});
