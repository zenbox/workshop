/** Webservice Application Index Script
 *
 * @desc Lorem ipsum dolor
 *       sit amet consectetur ...
 *
 * @package   Webservice Application
 * @module    init
 * @author    Michael <michael.reichart@gfu.net>
 * @version   v0.1.0
 * @since     2021-06-14
 * @see       i.e. inspired by ... {link to}
 * @license   MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
// node installed modules
const http = require('http');
const path = require('path');

// npm modules
// ./node_modules/express/index.js
const express = require('express');
const expressServer = express();
const bodyParser = require('body-parser');

// Variables (configuration)
let
  port = 3000,
  indexRoute = require(path.join(__dirname, '/routes/index.js')),
  searchRoute = require(path.join(__dirname, '/routes/search.js'));

// Express  views configuration
expressServer.set('view engine', 'ejs');
expressServer.set('views', path.join(__dirname, 'views'));

// Express static routing
expressServer.use(express.static(path.join(__dirname, 'public')));

// live reload
expressServer.use(require('connect-livereload')({
  port: 35729
}));

// Express dynamic routing
expressServer.use('/', indexRoute);
expressServer.use('/index.html', indexRoute);
expressServer.use('/search/', searchRoute);

// Control
expressServer.listen(port, () => console.log(`Express server runs on port ${port}.`));