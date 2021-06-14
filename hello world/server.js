/** A simple webservice
 *
 * @package Webapplication
 * @module webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

// Declaration
// let is the new var!
let
    http = require('http'),
    host = 'localhost',
    port = 3000,
    server = undefined;

// typeof undefined = 'undefined'
// typeof null = 'object'

// Functions

// Control
server = http.createServer();

server.on('connection', function () {
    console.log('a connection');
});

server.on('request', function (request, response) {
    // status, http rules
    response.writeHead(200, {
        "Content-type": "text/html",
        "Connection": "keep-alive"
    });

    response.write('<h1>Lorem headline ipsum dolor </h1>');
    response.write('<p>lorem ipsum dolor sit amet consectetur ...</p>');

    response.end('<footer>&copy; 2019 Michael</footer>');
});

server.on('close', function () {
    console.log('closed!');
});

server.listen(port, function () {
    console.log('- - - - - -\nwebservice runs on port ' + port + '\n- - - - - -');
});