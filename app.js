/** Webservice
 *
 * @desc lorem ipsum dolor ...
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.28
 * @since 2022-12-19
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

// IMPORTS
// 1. node modules
import path from "path";
import http from "http";
// - - - - - - - - - -
// 2. installed npm modules
import express from "express"; // export default express
import { Server } from "socket.io"; // export { Server, Client, ...} from Socket.io
import chalk from "chalk";

// - - - - - - - - - -
// 3. own modules
import indexRoute from "./src/routes/indexRoute.js";
import otherRoute from "./src/routes/otherRoute.js";

// DECLARATION
const app = express();
const server = http.createServer(app); // Seconds http server instance to use with socket.io
const io = new Server(server);
const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3001;

// WEBSERVICE CONFIGURATION
// Static routes
// delivers i.e. images, stylesheets, js-files to be use in browsers
app.use(express.static(path.resolve("./static")));

// Template engine for html
// app.set("view engine", "ejs");
app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));

// Dynamic routes
app.use("/", indexRoute);
app.use("/index", indexRoute);
app.use("/other", otherRoute);

// SOCKET SERVICE STUFF
// Accept incoming socket requests
io.on("connect", (socket) => {
    // console.dir(io);
    console.dir(socket.id);

    // Send messages
    socket.emit("message", "hello world");
    socket.emit("adminmessage", "hello admin");

    io.emit("message", "Hello all!!");

    socket.on("message", (data) => {
        console.log(data);
    });
    
    // Data generator
    setInterval(() => {
        io.emit("data", Math.round(Math.random() * 50));
    }, 5000);
});

// CONTROL
// Socket and webservice!
server.listen(port, (error) => {
    if (error) {
        console.log(chalk.bgRed(`App didn't start [${host}:${port}]`));
        throw error;
    }
    console.log(
        chalk.bgGreen(`App runs as web- and socket-service on ${host}:${port}`)
    );
});
