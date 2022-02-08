// A simple webservice

// Declaration
const http = require('http');

let
    host = 'http://localhost',
    port = 5500,
    server = null;


// Build
server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World</h1>');
    response.end('<p>lorem ipsum ...</p>');
});


// Control
server.listen(port);
console.log(`Server runs on port ${port}.`);