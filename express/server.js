/* global console, require */
/**
 * A Simple Webservice with Express
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/01/28
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

'use strict';

const http = require('http');
const path = require('path');
const express = require('express');
const indexRoute = require(path.join(__dirname, 'routes/index'));
const searchRoute = require(path.join(__dirname, 'routes/search'));

const log = require('./modules/logger/index.js');
log.prefix = 'EXPRESS:';

const circleCalculator = require('./modules/circleCalculator/index.js');
console.log(circleCalculator.area(15));
console.log(circleCalculator.circumference(15));

// express declaration
let
    expressServer,
    port = 3000;

// building a webserver
expressServer = express();

// configuring
expressServer.set('view engine', 'ejs');
expressServer.set('views', path.join(__dirname, 'views'));

// static route
expressServer.use(express.static(path.join(__dirname, 'public')));

// dynamic routes
expressServer.use('/', indexRoute);
expressServer.use('/index.html', indexRoute);

// expressServer.use('/search', searchRoute);

// express control
expressServer.listen(port, function () {
    log.asString('Express server runs on port ' + port + ' ...');
});