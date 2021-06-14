/** Hello world 3 as a server component */

const DEBUG = false;

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
    response.end('<p>lorem ipsum end. Liea secunda.</p>');
}

server = http.createServer(onRequest);
server.listen(port);

// console.clear();
console.log(`a simple webservice runs on ${host}:${port}`);

// Some more console commands
if (DEBUG) {
    console.log('- - - - -');
    console.time('time 01');
    console.warn('Attention!');
    console.log('%c simple text', 'color:red;'); // primitive value types
    console.dir({
        key: 'value'
    }); // objects
    console.table({
        key: 'value'
    });
    console.log('- - - - -');
    console.timeEnd('time 01');
    console.log('- - - - -');
}