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
router.get("/", function (request, response) {
    response.render("search", {
        result: "Magna Commodo"
    });
});

module.exports = router;