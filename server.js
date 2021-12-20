/** A Simple Webservice
 *
 * @package Webapplication
 * @module http
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Development debug flag
const DEBUG = true;


// Loading a node module
const http = require('http');

// Set up some values
let host = 'http://localhost',
    port = 3000,
    server = null;


// Functions
function onRequest(request, response) {

    // - - - - -
    if (DEBUG) console.log('Debug mode is on!');
    // - - - - -

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write('<h1>Hello World</h1>');
    response.write('<p>Lorem ipsum dolor sit amet consectetur ad piscit.</p>');
    response.end('<p>Fin.</p>');
}

// Control
server = http.createServer(onRequest);
server.listen(port);

// - - - - -
// Template literals!
if (DEBUG) console.log(`Http service is listening on ${port}`);
// - - - - -


if (DEBUG) { 
    // Time measurement

    console.log('- - - - -');
    console.time('time-01');
    
    console.warn('Attention!');
    console.error('An error occured!');
    console.log('%cA sample text', 'color:red;');

    console.dir({"key":"value"});
    console.table({"key": "value"});

    console.timeEnd('time-01');
    console.log('- - - - -');
}