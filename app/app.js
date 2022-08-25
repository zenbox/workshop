/** Webservice with Express
 *
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-06-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

// ES Modules
import path from 'path';
import express from 'express';

import Controller from './.../controller.js';
// const instanceFromController = new Controller();

import http from 'http';
import {
  Server
} from 'socket.io';

import restRoute from './src/routes/rest.js';

// Declaration
// Express, http and socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

// - - - - - - - - - -
// Webservice:
// Configure express
app.use(express.static(path.resolve('./static')));

app.use('/rest', restRoute);
// app.use('/login', loginRoute);
// ...

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

// Socket service:
io.on('connect', (socket) => {
  // Communication
  // Sending messages
  io.emit('serverMessage', 'Hello socket world!');
  socket.emit('serverMessage', 'Hello new client!');

  console.log(io);

  // Receiving messages
  socket.on('clientMessage', (message) => {
    console.log('client message', message);
  })

  socket.onAny((event, message) => {
    console.log('any', event, message);
  });

});

// - - - - - - - - --

// Control
// Starting webservice (express), and socket proxy
server.listen(port, () => {
  console.log(`Webservice and socket proxy listening on ${port}`)
});