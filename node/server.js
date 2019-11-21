/** A Simple Webserver
 *
 * @package Webapplication
 * @module Serverapplication
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-11-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

'use strict';
// - - - - - - - - - -
// DECLARATION
const http = require('http');

let
    host = 'http://localhost',
    port = 3000,
    server = undefined;

// FUNCTIONS
function createServerCallback() {
    console.log('server created.');
}

function onServerConnection() {
    console.log('a server connection.');
}

function onServerRequest() {
    console.log('a server request.');
}

function onServerClose() {
    console.log('connection closed.');
}

// CONTROL
server = http.createServer(createServerCallback);
server.listen(port);

server.on('connection', onServerConnection);
server.on('request', onServerRequest);
server.on('close', onServerClose);