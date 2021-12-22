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

// Control
http.listen(PORT, () => {
    console.log(`Webservice runs in port ${PORT}`);
})