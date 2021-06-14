/** A Simple Chat Via Websocket
 *
 *  @desc Open localhost:3000/index.html in two different browsers
 *        and chat ...
 *
 * @package Webapplication
 * @module Websocket
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
'use strict';

// Declarations
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// static routing
app.use(express.static(path.join(__dirname, 'public')));

// Alternatively use a get request
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

// listen to socket connections
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

// starts the webservice
http.listen(port, function () {
    console.log('listening on *:' + port);
});