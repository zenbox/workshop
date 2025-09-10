/** Init SQLite DB
 *
 * @package Webapplication
 * @module MODEL
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

// verbose() - Debugging, ...
const sqlite3 = require("sqlite3").verbose();

// Create database:
// in sqlite3 -> class Database { ... }
const db = new sqlite3.Database("./src/model/database.db");

db.serialize(() => {
    // - - - -

    db.run(
        `CREATE TABLE IF NOT EXISTS sheeps (
            id   INTEGER PRIMARY KEY,
            name TEXT UNIQUE
        )
        `
    );

    db.run(
        `INSERT OR IGNORE INTO sheeps (id, name)
         VALUES
           (1, "Dolly"),
           (2, "Harry"),
           (3, "Barry")
        `
    );

    db.all(`SELECT * FROM sheeps WHERE 1`, (err, rows) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("all the sheeps:");
            rows.forEach((row) => {
                console.log(`${row.id}: ${row.name}`);
            });
        }
    });

    db.close();
    // - - - -
});
