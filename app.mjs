// nodejs-Library
// Import des http-Module aus der Nodejs Library
import http from "http";
import path from "path";

// npm-Module
// Import eines vereinfachten/erweiterten Webservice-Moduls
import express from "express"; // ES6+ Modul!

// Eigene Module (Programmteile)
import loginRoute from "./src/routes/login.mjs";

// DECLARATION / INITIALIZATION
const port = 3000;
const app = express();

// console.log(__dirname);
// console.log(__filename);

// CONFIGURATION
// Statische Routen
app.use(express.static(path.resolve("./static")));

app.get("/login", loginRoute);

// CONTROL
app.listen(port, () => console.log(`Server runs on port ${port}`));
