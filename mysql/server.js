/* global console */
/**
 * a simple mysql connection and app
 *
 * @package webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2017/05/24
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

"use strict";
// - - - - - - - - - -
const express = require("express");
const path = require("path");

let port = 3000,
  expressServer = express(),
  usersRoute = require(path.join(__dirname, "routes/users.js"));

// express configuration
expressServer.set("view engine", "ejs");
expressServer.set("views", path.join(__dirname, "views"));

expressServer.use("/", usersRoute);
expressServer.use("/users.html", usersRoute);

expressServer.listen(port, function() {
  console.log("- - - - - - - - - -");
  console.log("webserver runs on port " + port);
  console.log("- - - - - - - - - -");
});
