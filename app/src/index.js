// /** Backend JS */
// import './style.css';

// /** Frontend JS */
// window
//     .document
//     .body
//     .appendChild(
//         document
//         .createElement('p')
//     )
//     .innerHTML = 'Hello New Element!';

// Backend JS
// import of required modules
console.log(process.env.NODE_ENV);

// Websockets
const path = require('path');
const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/')));

// - - - - - - - - - -


io.on('connection', (client) => {
    console.log('a user connected');
    console.log(client.id);

    // Wait for incoming messages
    client.on('clientMessage', (data) => {
        console.log(data);
    })

    // Send a message to the user
    client.emit('serverMessage', 'Hello user!');

    // Send a broadcast message
    io.emit('broadcastMessage', 'Hello everyone!');


});


// - - - - - - - - - -

// Control
http.listen(3000, () => {
    console.log('Webservice is running ...');
});