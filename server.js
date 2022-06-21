/** A Simple Weservice
 *
 * @desc 
 *
 * @package Webapplication
 * @module http
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-06-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
// Common JS Module
const http = require('http');

const host = 'http://localhost/';
const port = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.end('<h1>Hello World</h1>');
});

server.listen(port);
console.log('Server is listening ...')