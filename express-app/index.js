/** A webservice app with express
 *
 * @package Webapplication
 * @module http by express
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
// Node modules
const http = require('http');
const path = require('path');

// Npm modules
// implicit path: 
// 1. local node_modules, 
// 2. global node_modules, 
// 3. error can't find: own path required
//
const express = require('express');
const expressServer = express();
const bodyParser = require('body-parser');

// Variables
const DEBUG = true;
let port = 3000;


// Express settings
expressServer.set('view engine', 'ejs'); // Template engine!
expressServer.set('views', path.join(__dirname, 'views'));

// Static route
expressServer.use(express.static(path.join(__dirname, 'public')));
debugger;
// Dynamic routes

let
    indexRoute = require(path.join(__dirname, '/routes/index.js')),
    searchRoute = require(path.join(__dirname, '/routes/search.js'));

expressServer.use('/', indexRoute);
expressServer.use('/index.html', indexRoute);
expressServer.use('/search.html', searchRoute);

// Control
expressServer.listen(port, () => {
    if (DEBUG) {
        console.clear();
        console.log(`Express server listen on port ${port}`);
    }
})