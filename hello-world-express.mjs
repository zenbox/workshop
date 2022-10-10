// ES module type (recommended)
import express from "express";

const app = express();
const host = "http://localhost";
const port = 3000;

app.get("/index.html", (request, response) => {
  response.status(200).send("<h1>hello World (express)</h1>");
});

app.listen(port, () => {
  console.log(`Webservice runs on port ${port}`);
});
