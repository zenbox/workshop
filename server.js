/** Application Server
 *
 * @desc This script is the main script of the application.
 *       It serves a http server and a socket.io server.
 *
 * @package Webapplication
 * @module UI Server
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-08-31
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const port = 3000;

const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    },
});
// - - - - -
// Express webservice
// - - - - -
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/login", (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log(request.body);
    // Send the response as json back to the client
    // todo: get data from database
    response.json({
        firstname: "Michael",
        lastname: "Reichart",
    });
});

// - - - - -
// Socket.io
// - - - - -
// socket with acces-control-allow-origin

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.emit("socket message", "via socket: Hello from server");
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    socket.on("socket message", (msg) => {
        io.emit("socket message", msg);
    });
});

// - - - - -
// Server
// - - - - -
server.listen(port, () => {
    console.log(`Example server listening at http://localhost:${port}`);
});
