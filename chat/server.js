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
const CHATBOT = 'Klaus';

// helper
const path = require('path');
const http = require('http');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// Own modules
const formatMessages = require('./utils/messages');
const {
    userJoin,
    userLeave,
    getCurrentUser,
    getRoomUsers
} = require('./utils/users');

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

    // Unique socket ID!
    const user = getCurrentUser(socket.id);

    // receive a chat message
    socket.on('chatMessage', msg => {
        // console.log(msg);


        // Send to all chat clients in the current room
        io.to(user.room).emit('message', formatMessages(msg));
    });

    socket.on('joinRoom', ({
        username,
        room
    }) => {
        const user = userJoin(socket.id, username, room);

        // add a room
        socket.join(user.room);

        // Welcome
        socket.emit('message', formatMessages(`${CHATBOT} : Welcome to the Chat`));

        // Broadcast to the oter users
        socket.broadcast.to(user.room).emit('message', formatMessages(`${CHATBOT} : ${user.username} has joined the chat`));

        // send current user data
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.name)
        });
    })


    socket.on('disconnect', () => { 
                const user = userLeave(socket.id);

                if (user) {
                    io.to(user.room).emit(
                        'message',
                        formatMessages(`${CHATBOT} : ${user.username} has left the chat`)
                    );

                    // Send users and room info
                    io.to(user.room).emit('roomUsers', {
                        room: user.room,
                        users: getRoomUsers(user.room)
                    });
                }
    });

})


// - - - - - - - - - -
server.listen(PORT, () => console.log(`service is running on port ${PORT}`));