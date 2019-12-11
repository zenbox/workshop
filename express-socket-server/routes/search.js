/** Webserver index
 *
 * @package Webapplication
 * @module webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

"use strict";

// Declaration
const express = require("express");
const router = express.Router();

// Control
// Just call the search
router.get("/", function(request, response) {
  response.render("search", {
    search: "",
    check: ""
  });
});

// form post request
router.post("/", function(request, response) {
  response.render("search", {
    search: request.body.search, // request.query.search,
    check: request.body.check, //request.query.check,
    result: "Magna Commodo"
  });
});

module.exports = router;
