/** SHEEPS LIST
 *
 * @package Webapplication
 * @module ROUTES
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import express from "express";
import "./src/control/sheepsController.cjs";

const sheepsRoute = express.Router();

sheepsRoute.get("/", (request, response) => {
    response.render("sheeps-list", {
        title: "Sheeps List",
        data: ["Dolly", "Harry", "Barry"],
    });
});

export default sheepsRoute;
