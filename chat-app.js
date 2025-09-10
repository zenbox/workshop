/** Chat Application
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const HOST = "localhost";
const PORT = 8000;

// app.use(express.static("public"));

// Route to the chat client
app.get("/", (request, response) => {
    response.sendFile("/public/chat-client.html", { root: "./" });
});
// - - - - -
// Websocket communication
// - - - - -
io.on("connection", (socket) => {
    console.log("New connection established");

    socket.on("chat message", (message) => {
        socket.emit("chat message", message); // to sender
        socket.broadcast.emit("chat message", message); // to all other users
        // io.emit("chat message", message); // to every user
    });
});
// - - - - -
server.listen(PORT, HOST, () => {
    console.log(`Server runs on ${HOST}:${PORT}`);
});
