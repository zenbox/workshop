/** Webservice Application
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
// ES module type (recommended)
// - - - - - - - - - -
import path from "path";
// - - - - - - - - - -
import express from "express";
// - - - - - - - - - -
import indexRoute from "./src/routes/indexRoute.mjs";

const app = express();
const host = "http://localhost";
const port = 3000;

// Webservice Configuration
// Static routes
app.use(express.static(path.resolve("./static")));

// Template engine(s)
app.set("view engine", "pug");
app.set("view engine", "ejs");

app.set("views", path.resolve("./src/views/pug"));

// Dynamic routes
app.get("/", indexRoute);
// app.get("/page", pageRoute);
// app.get("/rest", restRoute);

app.listen(port, () => {
  console.log(`Webservice runs on port ${port}`);
});
