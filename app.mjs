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
// - - - - - - - - - -
import indexRoute from "./src/routes/indexRoute.mjs"
import sheepsRoute from "./src/routes/sheepsRoute.mjs"

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const host = "http://localhost"
const port = 3001

// Webservice Configuration
// Static routes
app.use(express.static(path.resolve("./static")))

// Template engine(s)
app.set("view engine", "pug")
// app.set("view engine", "ejs");

app.set("views", path.resolve("./src/views/pug"))
// app.set("views", path.resolve("./src/views/ejs"));

// Dynamic routes
app.use("/", indexRoute)
app.use("/sheeps", sheepsRoute)
// app.get("/sheeps/:id?", sheepsRoute)
// app.delete("/sheeps/delete/:id?", sheepsRoute)

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
server.listen(port, (error) => {
    if (error) throw error

    console.log(`Webservice and socket proxy run on port ${port}`)
})
