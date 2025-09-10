/** SheepsController
 *
 * @package Webapplication
 * @module CONTROLLER
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

const sqlite3 = require("sqlite3").verbose();

class SheepsController {
    /**
     * @desc defines the path to ....
     *
     * @param   {string} dbPath - path to the database
     * @returns {void}
     */
    constructor(dbPath = "database.db") {
        this.dbPath = dbPath;
    }

    /**
     * @desc    connect to the database
     *
     * @returns {object}
     */
    getDatabase() {
        const db = new sqlite3.Database(this.dbPath, (err) => {
            if (err) {
                console.log("error while connecting the database");
            }
        });

        return db;
    }

    /**
     * @desc    select all sheeps!
     *
     * @returns {object}
     */
    getAllSheeps() {
        return new Promise((resolve, reject) => {
            // - - - -
            const db = this.getDatabase();
            db.all("SELECT * FROM sheeps WHERE 1 ORDER BY id", (err, rows) => {
                // - - - -
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
                // - - - -
            });
            db.close();
        });
        // - - - -
    }
}
