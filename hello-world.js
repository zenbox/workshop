/** hello world app
 *
 * @desc lorem ipsum dolor sit ...
 *
 * @package Webapplication
 * @module $(selector).append(content);
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */
// IMPORT
// Entire library:
import http, { request } from "http";

// Part of a library:
// import { createServer } from 'node:http';

// CONFIGURATION
const host = "localhost";
const port = 3000; // Any port number greater than 1023 is valid

// Arrow function!
let callback = (request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
};

const server = http.createServer(callback);

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
