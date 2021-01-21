/** A Chat Application
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-01-21
 * @see i.e.inspired by Brad Traversy, Traversy Media {https: //www.youtube.com/watch?v=jD7FnbI76Hg&t=2128s}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// helper
const path = require('path');
const http = require('http');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// Own modules
const formatMessages = require('./utils/messages');

// A web service
const express = require('express');
const app = express();
const PORT = 3002 || process.env.PORT;

// Websocket library
const socketio = require('socket.io');

// The live server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

// The websocket server
const server = http.createServer(app);
const io = socketio(server);

// A single static route
app.use(express.static(path.join(__dirname, 'public')));
// - - - - - - - - - -
// The socket stuff

// a client connects
io.on('connection', socket => {
    console.log('something has connected!')

    socket.emit('message', formatMessages('Welcome to the Chat'));
    socket.broadcast.emit('message', formatMessages('A user has joined the chat'));

    // receive a chat message
    socket.on('chatMessage', msg => {
        // console.log(msg);
        // Send to all chat clients
        io.emit('message', formatMessages(msg));
    });


    socket.on('disconnect', () => io.emit('message', formatMessages('USER has left the chat.')));

})


// - - - - - - - - - -
server.listen(PORT, () => console.log(`service is running on port ${PORT}`));