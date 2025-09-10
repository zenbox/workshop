/**
 *
 * @desc Web-Application
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

// Internal node modules
import path from "node:path";
import http from "node:http";

// External node modules
import express from "express";
import bodyParser from "body-parser";

// Own modules
import startRoute from "./src/route/startRoute.js";
import sheepsRoute from "./src/route/sheepsRoute.js";

// Constants, variables,
const app = express();
const HOST = "localhost";
const PORT = process.env.PORT || 3000;

// Template configuration
// ejs - embedded javascript
// alternates: pug, handlebars, mustache ...
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "./src/view"));

// Static web service
// built a web service conform path
app.use(express.static(path.join(path.resolve(), "public")));

// Dynamic routes
app.use("/start", startRoute);
app.use("/sheeps", sheepsRoute);

// Start the service
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
