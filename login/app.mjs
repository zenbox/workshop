// Express, Session
// npm i express express-session
import express from "express";
import session from "express-session";

// Body parser
// npm i body-parser
import bodyParser from "body-parser";

// expressMySQLSession
// npm i express-mysql-session
import MySQLStore from "express-mysql-session";

// Passport und strategy
// npm i passport passport-local
import passport from "passport";
import { Strategy } from "passport-local";

// Einbinden der Auth-Klasse als Kontroller
// besser in `routes` auslagern
import Auth from "./src/controllers/Auth.mjs";
const auth = new Auth();

// Webservice
const app = express();

// Body parser
// Parse application/x-www-form-urlencoded
// http://domain.de/filename.html?name=Max%20Mustermann
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static und view engine
app.use(express.static("static")); // `public` ist gebräuchlicher
app.set("view engine", "ejs");
app.set("views", "src/views");

// Cookie und Session
const sessionStore = MySQLStore(session);
const sessionStoreData = {
    key: "session_cookie_name", // Name des Services / Anbieters
    secret: "session_cookie_secret", // besser hex-Code / encrypted
    store: new sessionStore({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "",
        database: "cookie_user",
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 Tag (ms * s * m * h)
    },
    resave: false,
    saveUninitialized: false,
};
app.use(session(sessionStoreData));

// Passport als Middleware
app.use(passport.initialize());
app.use(passport.session());

// Webservice starten
// Ggf. nodemon installieren
// npm i nodemon -g
// nodemon app.mjs
app.listen(3003, () => {
    console.log("- - - - - - - - - -");
    console.log("Server gestartet auf http://localhost:3003");
    console.log("- - - - - - - - - -");
});

// - - - - - - - - - -
// ROUTES (sollten in `src/routes` ausgelagert werden)
// - - - - - - - - - -
// GET
// User Requests
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            console.error(err);
        } else {
            res.redirect("/");
        }
    });
});

app.get("/protected-route", (req, res) => {
    res.render("protected-route");
});

// System Requests
app.get("/admin-route", (req, res) => {
    res.render("admin-route");
});

app.get("/notAuthorized", (req, res) => {
    res.render("notAuthorized");
});

app.get("/notAuthorizedAdmin", (req, res) => {
    res.render("notAuthorizedAdmin");
});

app.get("/userAlreadyExists", (req, res) => {
    res.render("userAlreadyExists");
});

// Register
app.get("/register", (req, res) => {
    res.render("register");
});

// Redirected nach dem Login
app.get("/login-success", (req, res) => {
    res.render("login-success");
});

// TODO error: requires a callback function
app.get("/login-failure", (req, res) => {
    res.render("login-failure");
});

// POST
/*
passport ersetzt das:
(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    ...
},
verwendet dazu die `customFields``
*/
app.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login-failure",
        successRedirect: "/login-success",
    })
);

// console.log(auth);
// ! auth.userExists ist nicht verfügbar
// ! Ich habe noch nicht verstanden warum, hat einer eine Idee?
app.post("/register", auth.userExists, (req, res, next) => {
    const saltHash = auth.generatePassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    // Besser auch in der Auth-Klasse unterbringen
    auth.connection.query(
        "INSERT INTO users(username, hash, salt, isAdmin) VALUES(?,?,?,0)",
        [req.body.username, hash, salt],
        (error, resultSet, fields) => {
            if (error) {
                console.log("Fehler beim Registieren");
                res.redirect("/error");
            } else {
                console.log("Registrierung erfolgreich");
            }
        }
        // res.redirect("/login");
    );

    res.redirect("/login");
});
