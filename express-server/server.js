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
"use strict";

// Declaration
// node modules
const http = require("http");
const path = require("path");

// npm modules
const express = require("express");
const expressServer = express();

let port = 3000,
    indexRoute = require(path.join(__dirname, "/routes/index.js")),
    searchRoute = require(path.join(__dirname, "/routes/search.js"));

// set template engine
expressServer.set("view engine", "ejs");
expressServer.set("views", path.join(__dirname, "views"));

// dynamic routing
expressServer.use("/", indexRoute);
expressServer.use("/index.html", indexRoute);
expressServer.use("/search.html", searchRoute);

// Control
expressServer.listen(port, function () {
    console.log(`express server runs on port ${port}`);
});