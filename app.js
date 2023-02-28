/** A Simple Webservice
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-02-28
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

// IMPORTS
// Node native modules
import path from "path";
import http from "http";

// External modules (packages)
import express from "express";

// Own modules
import loginController from "./src/controller/login.js";

// DECLARATION
const app = express();
const host = process.env.HOST || "http://localhost";
const port = process.env.PORT || 3000;

// CONFIGURATION
// Static route
app.use(express.static(path.resolve("./wwwroot")));
app.set("view engine", "pug");
app.set("views", path.resolve("./src/views"));

// Dynamic routes
app.use("/login", loginController);

// CONTROLS
app.listen(port, (error) => {
    if (error) {
        console.log(`App didn't start (${host}, ${port})`);
        throw error;
    }

    console.log(`App runs as webservice on ${host}:${port}.`);
});
