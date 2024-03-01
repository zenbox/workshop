// nodejs-Library
// Import des http-Module aus der Nodejs Library
import http from "http";
import path from "path";

// npm-Module
// Import eines vereinfachten/erweiterten Webservice-Moduls
import express from "express"; // ES6+ Modul!

// // ! -----
// // * * * *
// import csrf from "csurf";
// import passport from "passport";

// import * as sqlite3 from "sqlite3";
// import session from "express-session";
// import sqliteStoreFactory from "express-session-sqlite";
// const SqliteStore = sqliteStoreFactory.default(session);
// // * * * *
// // ! -----

// Eigene Module (Programmteile)
 import loginRoute from "./src/routes/loginRoute.mjs";
//import authRoute from "./src/routes/authRoute.mjs"; // !
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

// // ! -----
// // * * * *
// app.use(
//     session({
//         secret: "keyboard cat",
//         resave: false, // don't save session if unmodified
//         saveUninitialized: false, // don't create session until something stored
//         // store: new SQLiteStore({ db: "sessions.db", dir: "./var/db" }),
//         store: new SqliteStore({
//             // driver: sqlite3.Database,
//             db: "session.db", // or ":memory:
//             dir: "./var/db",
//             // path: "./var/db",
//             // ttl: 1234,
//             // prefix: "sess:",
//             // cleanupInterval: 300000,
//         }),
//     })
// );
// app.use(csrf());
// app.use(passport.authenticate("session"));
// // * * * *
// // ! -----

app.use("/login", loginRoute);
// app.use("/login", authRoute);
app.use("/sheeps", sheepsRoute);

// CONTROL
app.listen(port, () => console.log(`Server runs on port ${port}`));
