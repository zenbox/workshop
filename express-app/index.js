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
let port = 3000,
    indexRoute, // index.html
    searchRoute; // search.html

// Express settings

// Static route
expressServer.use( express.static(path.join(__dirname, 'public')) );

// Methods


// Control
expressServer.listen(port, () => {
    if (DEBUG) {
        console.clear();
        console.log(`Express server listen on port ${port}`);
    }
})