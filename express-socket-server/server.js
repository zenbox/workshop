/** An simple Express Webservice
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
'use strict';

// Declaration
// node modules
const http = require('http');
const path = require('path');

// npm modules
const express = require('express');
const socketio = require('socket.io');
const expressServer = express();
const httpServer = http.createServer(expressServer);
const socketServer = socketio(httpServer);
const bodyParser = require('body-parser');

let port = 3000,
  indexRoute = require(path.join(__dirname, '/routes/index.js')),
  searchRoute = require(path.join(__dirname, '/routes/search.js'));

// set template engine
expressServer.set('view engine', 'ejs');
expressServer.set('views', path.join(__dirname, 'views'));

expressServer.use(bodyParser.json());
expressServer.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// static routing
expressServer.use(express.static(path.join(__dirname, 'public')));

// dynamic routing
expressServer.use('/', indexRoute);
expressServer.use('/index.html', indexRoute);
expressServer.use('/search.html', searchRoute);

// Control
expressServer.listen(port, function () {
  console.log(`express server runs on port ${port}`);

  // Socket server functions
  // socketServer = socketio(httpServer);

  socketServer.on('connection',
    function (socket) {
      console.log(' A socket client has connected');

      socket.on('clientMessage', function (data) {
        console.log(data);

        // talk to a client
        socket.emit('serverMessage', 'hello client!')

        // talk to all clients
        socketServer.emit('serverBroadcastMessage', 'hello to all clients"')
      })

    });
});