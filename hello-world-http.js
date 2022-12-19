// DECLARATION
// Load some libraries

// as ES Module
import http from "http";
// export default http = function () {}

// as Commonjs Module (deprecated)
// const http = require("http")
// exports http

const host = process.env.HOST || "localhost";
const port = 3000;

let server = null;

// METHODS
server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.write("<h1>Hello World</h1>");
    response.write("<p>Lorem ipsum dolor sit amet.</p>");
    response.end("<p>@eof</p>");
});

// CONTROL
server.listen(port, () => { 
    console.log(" - - - - - - - - - -\n",`http service runs on port ${port}.\n`, "- - - - - - - - - -"); // "   '   `  
});
