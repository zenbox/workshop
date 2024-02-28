import express from "express";

// ! -----
// * * * *
import csrf from "csurf";
import passport from "passport";
import { Strategy } from "passport-local";
import crypto from "crypto";
import db from "../models/authDb.mjs";

// import * as sqlite3 from "sqlite3";
// import session from "express-session";
// import sqliteStoreFactory from "express-session-sqlite";
// const SqliteStore = sqliteStoreFactory.default(session);
// * * * *
// ! -----

passport.use(
    new Strategy(function verify(username, password, cb) {
        db.get(
            "SELECT * FROM users WHERE username = ?",
            [username],
            function (err, row) {
                if (err) {
                    return cb(err);
                }
                if (!row) {
                    return cb(null, false, {
                        message: "Incorrect username or password.",
                    });
                }

                crypto.pbkdf2(
                    password,
                    row.salt,
                    310000,
                    32,
                    "sha256",
                    function (err, hashedPassword) {
                        if (err) {
                            return cb(err);
                        }
                        if (
                            !crypto.timingSafeEqual(
                                row.hashed_password,
                                hashedPassword
                            )
                        ) {
                            return cb(null, false, {
                                message: "Incorrect username or password.",
                            });
                        }
                        return cb(null, row);
                    }
                );
            }
        );
    })
);

/* Configure session management. */
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

var router = express.Router();

/** GET /login */
router.get("/login", function (req, res, next) {
    res.render("login");
});

/** POST /login/password */
router.post(
    "/login/password",
    passport.authenticate("local", {
        successReturnToOrRedirect: "/",
        failureRedirect: "/login",
        failureMessage: true,
    })
);

/* POST /logout */
router.post("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

/* GET /signup */
router.get("/signup", function (req, res, next) {
    res.render("signup");
});

/* POST /signup */
router.post("/signup", function (req, res, next) {
    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(
        req.body.password,
        salt,
        310000,
        32,
        "sha256",
        function (err, hashedPassword) {
            if (err) {
                return next(err);
            }
            db.run(
                "INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)",
                [req.body.username, hashedPassword, salt],
                function (err) {
                    if (err) {
                        return next(err);
                    }
                    var user = {
                        id: this.lastID,
                        username: req.body.username,
                    };
                    req.login(user, function (err) {
                        if (err) {
                            return next(err);
                        }
                        res.redirect("/");
                    });
                }
            );
        }
    );
});

export default router;
