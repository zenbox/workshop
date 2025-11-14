/** A Simple Webservice
 *
 * @desc A Simple Webservice
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

// Internal ES module
import http from "node:http";
import path from "node:path";

// External module
import express from "express";
import bodyParser from "body-parser";

// Configs, objects ...
const app = express();
const HOST = "localhost";
const PORT = 8080;

// Functions
let callback = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
};

// Express configurations
// static route
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST} is running at port ${PORT}`);
});

// const server = http.createServer(callback);

// server.listen(PORT, HOST, () => {
//     console.log(`http://${host} is running at port ${port}`);
// });

