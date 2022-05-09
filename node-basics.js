// A simple webservice

// Declaration
const http = require('http');

let
    host = 'http://localhost',
    port = 3000,
    server = null;


// Build
server = http.createServer((request, response) => {
    // http-state: 200 OK, 404 file not found, 501 server nor available 
    response.writeHead(200, {
        'Content-type': 'text/html'
    });
    response.write('<h1>Hello World</h1>');
    response.write('<p>Lorem ipsum dolor sit amet consectetur.</p>');
    response.end('<p>End of file</p>.');
});


// Control
server.listen(port);