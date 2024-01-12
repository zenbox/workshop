import mysql from "mysql";
import dbConfig from "../model/dbConfig.mjs";

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

            response
                .status(200)
                .render(this.view, {
                    title: "List of all the sheeps",
                    sheeps: result, // Array mit Schafen
                });
        });

        return true;
    }

    // ReST GET
    selectSheepById(request, response, next) {
        console.log("selectSheepById");
        return true;
    }

    // ReST POST
    insertSheep(request, response, next) {
        console.log("insertSheep");
        return true;
    }

    // Rest PUT/PATCH
    updateSheep(request, response, next) {
        console.log("updateSheep");
        return true;
    }

    // Rest DELETE
    deleteSheep(request, response, next) {
        console.log("deleteSheep");
        return true;
    }
}

export default SheepsController;
