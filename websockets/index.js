/** A Simple Chat via Websockets
 *
 * @package Webapplication
 * @module Websocket
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-22
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declarations
const path = require('path');
const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;


// Static route
// console.log(__dirname, __filename)
app.use(express.static(path.join(__dirname, 'public')));

// User list
let users = ['Karl', 'Laura', 'Paul', 'Beate', 'Hans', 'Maria'];
let user = {};

// Browser JS: obj.addEventListener()
io.on('connection', (socket) => { 
    console.log('A new socket connection ...')
    console.log(socket.id)

    // Fake some user names
    user[socket.id] = users[0];
    users.shift();

    socket.on('clientMessage', (messageData) => {
        console.log(messageData);

        let data = {
            id: user[socket.id],
            time: socket.time,
            message: messageData
        };

        // Broadcast message to all clients
        io.emit('broadcastServerMessage', data);

        // Private message to a specific socket client
        socket.emit('serverMessage', 'message sent!');
     });


});


// Control
http.listen(PORT, () => {
    console.log(`Webservice listen on port ${PORT}`);
})