import mysql from "mysql";
import dbConfig from "../models/dbConfig.mjs";

// Klassen fassen Funktionen zusammen!
class SheepsController {
    constructor() {
        this.view = "sheepsView";
    }

    // ReST GET
    selectAllSheeps(request, response, next) {
        console.log("selectAllSheeps");

        // Verbindung zur Datenbank herstellen
        const db = mysql.createConnection(dbConfig);
        db.connect();

        const sql = "SELECT * FROM sheeps;";
        db.query(sql, (error, result) => {
            if (error) {
                console.log(error);
                return false;
            }

            response.status(200).render(this.view, {
                title: "List of all the sheeps",
                sheeps: result, // Array mit Schafen
                message: "Showing all the sheeps I have.",
            });
        });

        return true;
    }

    // ReST GET
    selectSheepById(request, response, next) {
        console.log("selectSheepById");

        // Verbindung zur Datenbank herstellen
        const db = mysql.createConnection(dbConfig);
        db.connect();

        const sql = "SELECT * FROM sheeps WHERE id = ?;";
        db.query(sql, [request.params.id], (error, result) => {
            if (error) {
                console.log(error);
                return false;
            }

            response.status(200).render(this.view, {
                title: "Just one selected sheep",
                sheeps: result, // Array mit Schafen
                message: "One sheep selected.",
            });
        });
        return true;
    }

    // ReST POST (insert)
    insertSheep(request, response, next) {
        console.log("insertSheep");

        // Verbindung zur Datenbank herstellen
        const db = mysql.createConnection(dbConfig);
        db.connect();

        const sql = "INSERT INTO sheeps (sheep) VALUES (?);";
        db.query(sql, [request.body.sheep], (error, result) => {
            if (error) {
                console.log(error);
                return false;
            }

            const sql2 = "SELECT * FROM sheeps;";
            db.query(sql2, (error, result) => {
                if (error) {
                    console.log(error);
                    return false;
                }

                response.status(200).render(this.view, {
                    title: "List of all the sheeps",
                    sheeps: result, // Array mit Schafen
                    message: "One new sheep inserted",
                });
            });
        });
        return true;
    }

    // Rest PUT/PATCH (update)
    updateSheep(request, response, next) {
        console.log("updateSheep");

        // Verbindung zur Datenbank herstellen
        const db = mysql.createConnection(dbConfig);
        db.connect();

        const sql = "UPDATE sheeps SET sheep = ? WHERE id = ?;";
        db.query(
            sql,
            [request.body.sheep, request.params.id],
            (error, result) => {
                if (error) {
                    console.log(error);
                    return false;
                }

                const sql2 = "SELECT * FROM sheeps;";
                db.query(sql2, (error, result) => {
                    if (error) {
                        console.log(error);
                        return false;
                    }

                    response.status(200).render(this.view, {
                        title: "List of all the sheeps",
                        sheeps: result, // Array mit Schafen
                        message: "One sheep updated.",
                    });
                });
            }
        );
        return true;
    }

    // Rest DELETE
    deleteSheep(request, response, next) {
        console.log("deleteSheep");

        // Verbindung zur Datenbank herstellen
        const db = mysql.createConnection(dbConfig);
        db.connect();

        const sql = "DELETE FROM sheeps WHERE id = ?;";
        db.query(sql, [request.params.id], (error, result) => {
            if (error) {
                console.log(error);
                return false;
            }

            response.status(200).render(this.view, {
                title: "List of all the sheeps",
                sheeps: result, // Array mit Schafen
                message: "One sheep deleted.",
            });
        });
        return true;
    }
}

export default SheepsController;
