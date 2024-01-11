// nodejs-Library
// Import des http-Module aus der Nodejs Library
import http from "http";
import path from "path";

// npm-Module
// Import eines vereinfachten/erweiterten Webservice-Moduls
import express from "express"; // ES6+ Modul!

// Eigene Module (Programmteile)
import loginRoute from "./src/routes/loginRoute.mjs";
import sheepsRoute from "./src/routes/sheepsRoute.mjs";

// DECLARATION / INITIALIZATION
const port = 3000;
const app = express();

// CONFIGURATION
// Statische Routen
app.use(express.static(path.resolve("./static")));

// Template engine
app.set("view engine", "ejs"); // "pug", "ejs", "mustache", "hbs", "handlebars", "nunjucks", "just"
app.set("views", path.resolve("./src/views"));

app.use("/login", loginRoute);
app.use("/sheeps", sheepsRoute);

// CONTROL
app.listen(port, () => console.log(`Server runs on port ${port}`));
