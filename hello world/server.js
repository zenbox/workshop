/** Hello world 3 as a server component */

// Loading a module
let http = require('http'),

    // Setting up some values
    host = 'http://localhost',
    port = 3000,
    server = null;

function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<h1>Hello World</h1>');
    response.end('<p>lorem ipsum ...</p>');
}

server = http.createServer(onRequest);
server.listen(port);

console.clear();
console.log(`a simple webservice runs on ${host}:${port}`);