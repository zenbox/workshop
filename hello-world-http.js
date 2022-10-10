// DECLARATION
const http = require("http");

const host = "http://localhost";
const port = 3000;

let server = null;

// METHODS/CONFIGURATION
server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  response.write("<h1>Hello World</h1>");
  response.write("<p>Lorem ipsum dolor sit ...</p>");
  response.end("<p>@eof</p>");
});

// CONTROL/EVENT CONTROL
server.listen(port, () => {
  console.log(`http service runs on port ${port} ...`);
});
