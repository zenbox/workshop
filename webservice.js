/* global console, require */
/**
 * A Simple Webservice
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/01/28
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

'use strict';
// - - - - - - - - - -
// Declarations
const http = require('http');
let
  host = 'http://localhost',
  port = 3000,
  onCreateServer = undefined,
  server = undefined;

// Methods (Eventhandler)
onCreateServer = function (request, response) {
  // console.log(request);
  response.writeHead(200, {
    "Content-type": "text/html",
    "Connection": "keep-alive"
  });

  response.write('<h1>Hallo Welt!</h1>');
  response.write('<p>Lorem ipsum dolor sit aet consectetur ...</p>');
  response.end('<p>Kann auch was drin stehen ...</p>');
};

// Control
server = http.createServer(onCreateServer);
server.listen(port);

// Event Listener
server.on('request', function () {
  console.log('a request!');
});

server.on('connection', function () {
  console.log('a connection!');
});

server.on('close', function () {
  console.log('closed!');
});


// - - - - - - - - - -