/* global console, window, document */
/**
 * A Socket IO Server
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/02
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

'use strict';

const http = require('http');
const path = require('path');
const express = require('express');
const socketio = require('socket.io');

let
  expressServer = undefined,
  httpServer = undefined,
  socketServer = undefined,
  port = 3000;

// building a webserver
expressServer = express();

// building a http server for socket binding
httpServer = http.createServer(expressServer);

// a static route for http documents
expressServer.use(express.static(path.join(__dirname, '../')));

httpServer.listen(port, function () {
  console.log('http server including express listening on port 3000');
})

// building the socket server
// declaration
socketServer = socketio(httpServer);

// methods
function onSocketMessage(message) {
  console.log(message);
}

function onSocketsConnection(socket) {
  console.log('a client is connected');

  // receive messages
  socket.on('message', onSocketMessage);

  // send a message to a client
  socket.emit('message', 'hello from your soul!');

  // send a message to all clients
  socketServer.emit('message', 'hello to all clients!');
}

// event-control
socketServer.sockets.on('connection', onSocketsConnection);