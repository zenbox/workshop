/** Other Route
 *
 * @package Webapplication
 * @module Routes
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-12-19
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import express from "express";

const router = express.Router();

// A get request!
router.get("/", (request, response, next) => { 
    response
        .status(200)
        .render("otherView");
 } )

export default router;
