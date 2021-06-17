/** Sockt IO Chat
 *
 * @package Webapplication
 * @module Chat
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-16
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

// Static Route
app.use(express.static(path.join(__dirname, 'public')));


// Listen for socket connections
io.on('connection', (socket) => {
    console.log('socket connection!');


    socket.on('chat message', (messageData) => {
        // Broadcast message to all clients
        io.emit('chat message', messageData);
    })

})


// Start web service
http.listen(PORT, () => {
    console.clear();
    console.log(`webservice running on port ${PORT}`)
});