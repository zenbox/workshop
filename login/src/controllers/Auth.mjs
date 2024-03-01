// Passport, Strategy, Crypto, MySQL
import passport from "passport"; // Authentifizierung
import { Strategy } from "passport-local"; // als lokale Strategie
import mysql from "mysql"; // Datenbank
// npm i crypto
import crypto from "crypto"; // Verschlüsselung

import dbConfig from "../models/db-config.mjs";

class Auth {
    // Konstruktor (keine Überladung möglich / nötig)
    constructor() {
        this.username = null; // `this` ist die Instanz

        // Wie meldet sich der User an?
        const customFields = {
            usernameField: "username",
            passwordField: "password",
        };

        const strategy = new Strategy(
            customFields,
            this.verifyFieldsCallback.bind(this)
            // ! `this` aus Auth verwenden!!
        );
        passport.use(strategy);

        passport.serializeUser((user, doneCallback) => {
            // console.dir(user);
            doneCallback(null, user.id); // error ist erstmal `null`
        });

        passport.deserializeUser((userId, doneCallback) => {
            const dataArray = [userId];

            const connection = this.dbConnection();

            connection.query(
                // sprint - Syntax anstelle von JS-String-literals
                // bessere Lesbarkeit / Generierung
                "SELECT * FROM users WHERE id = ?",
                dataArray,
                (error, resultSet) => {
                    doneCallback(null, resultSet[0]);
                }
            );
        });
    }

    dbConnection() {
        const connection = mysql.createConnection(dbConfig);

        connection.connect((err) => {
            if (!err) {
                console.log("Connected");
            } else {
                console.log("Conection Failed");
            }
        });
        return connection;
    }

    verifyFieldsCallback(username, password, doneCallback) {
        const connection = this.dbConnection();

        connection.query(
            "SELECT * FROM users WHERE username = ?",
            [username],
            (error, resultSet, fields) => {
                // resultSet: id, username, hash, salt, isAdmin

                // Kein gültiges Ergebnis
                if (error) return doneCallback(error);
                if (resultSet.length === 0) return doneCallback(null, false);

                // es gibt ein gültiges Ergebnis
                const isValid = this.validatePassword(
                    password,
                    resultSet[0].hash,
                    resultSet[0].salt
                );

                const user = {
                    id: resultSet[0].id,
                    username: resultSet[0].username,
                    hash: resultSet[0].hash,
                    salt: resultSet[0].salt,
                    isAdmin: resultSet[0].isAdmin,
                };

                console.log("- - - - -\nUSER FOUND\n- - - - -");

                if (isValid) {
                    // Rückgabewert, auch zum Testen
                    return doneCallback(null, user);
                } else {
                    // Rückgabewert, auch zum Testen
                    return doneCallback(null, false);
                }
            }
        );
    }

    validatePassword(password, hash, salt) {
        // Password-Based Key Derivation Function 2
        // 10000 Iterationen, 60 Byte, sha512
        const hashToCheck = crypto
            .pbkdf2Sync(password, salt, 10000, 60, "sha512")
            .toString("hex");

        // Rückgabewert, auch zum Testen
        return hash === hashToCheck;
    }

    generatePassword(password) {
        const salt = crypto.randomBytes(32).toString("hex");
        const hash = crypto
            .pbkdf2Sync(password, salt, 10000, 60, "sha512")
            .toString("hex");

        return { salt: salt, hash: hash };
    }

    isAuth(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect("/notAuthorized");
        }
    }

    isAdmin(req, res, next) {
        if (req.isAuthenticated() && req.user.isAdmin == 1) {
            next();
        } else {
            res.redirect("/notAuthorizedAdmin");
        }
    }

    userExists(req, res, next) {
        console.log(this);

        const connection = this.dbConnection();

        connection.query(
            "Select * from users where username=? ",
            [req.body.username],
            function (error, results, fields) {
                if (error) {
                    console.log("Error");
                } else if (results.length > 0) {
                    res.redirect("/userAlreadyExists");
                } else {
                    next();
                }
            }
        );
    }
}

export default Auth;
