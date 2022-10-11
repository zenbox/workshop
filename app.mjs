/** Webservice Application
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
// ES module type (recommended)
// - - - - - - - - - -
import path from "path"
import http from "http"
// - - - - - - - - - -
import express from "express"
import { Server } from "socket.io"
import connectLiveReload from "connect-livereload"
import liveReload from "livereload"
// - - - - - - - - - -
import indexRoute from "./src/routes/indexRoute.mjs"

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const host = "http://localhost"
const port = 3000

// - - - - - - - - - -
// Live reload configuration
const liveReloadServer = liveReload.createServer()
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/")
    }),
        100
})
// - - - - - - - - - -
app.use(
    connectLiveReload({
        port: 35729,
    })
)
// - - - - - - - - - -

// Webservice Configuration
// Static routes
app.use(express.static(path.resolve("./static")))

// Template engine(s)
app.set("view engine", "pug")
// app.set("view engine", "ejs");

app.set("views", path.resolve("./src/views/pug"))
// app.set("views", path.resolve("./src/views/ejs"));

// Dynamic routes
app.get("/", indexRoute)
// app.get("/page", pageRoute);
// app.get("/rest", restRoute);

let user = {}

// Socket service
io.on("connect", (socket) => {
    // A socket connection persists!

    user[socket.id] = "my name"

    io.emit("broadcastMessage", "Hello Client, you got your socket connection.")
    console.log(user)

    socket.emit("clientMessage", "Hello Client!")

    socket.on("clientMessage", (data) => {
        console.log(data)
    })
})

// Both services:
server.listen(port, () => {
    console.log(`Webservice and socket proxy run on port ${port}`)
})
