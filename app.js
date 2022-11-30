/** Webservice Example
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-11-29
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
// DECLARATION
const http = require("http");
// Import as ES module!
// import fetch from "node-fetch";
// import Fn from "./class/Fn.class.js"

const HOST = "localhost";
const PORT = 3000;

let server = null,
    onCreateServer = null;

// METHODS
onCreateServer = function (request, response) {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<h1>Hello World</h1>");
    response.write("<p>Lorem ipsum dolor sit</p>");
    response.end("<p>@eof</p>");
};

// PROCESS
server = http.createServer(onCreateServer);
server.listen(PORT, () => console.log("HTTP service runs on port 3000"));
