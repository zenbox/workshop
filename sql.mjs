/** Database Initialisation
 *
 * @package Webapplication
 * @module Database
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import mysql from "mysql"

const dbConfig = {
    host: "localhost",
    user: "root",
    password: "miromiro",

    port: 3306,
    database: "animals",

    insecureAuth: true,
}

const db = mysql.createConnection(dbConfig, (error, result) => {
    if (error) throw error
    console.log("create connection: ", result)
})

let sql = null

db.on("error", (error) => {
    console.dir(error)
})

db.connect((error) => {
    console.log("connect: ", error)
})
// - - - - - - - - - -

db.query("CREATE DATABASE IF NOT EXISTS animals;")
db.query("USE animals;", (error) => {
    console.log("USE: ", error)
})

// Tabelle anlegen
db.query("DROP TABLE IF EXISTS sheeps;")

sql =
    "CREATE TABLE sheeps ( " +
    "id INT(11) AUTO_INCREMENT, " +
    "sheep VARCHAR(50), " +
    "PRIMARY KEY (id) );"
db.query(sql)

sql =
    "INSERT INTO sheeps " +
    "(sheep) " +
    "VALUES " +
    "('Merinoschaf')," +
    "('Bergschaf')," +
    "('Haarschaf');"

db.query(sql, function () {
    console.log("3 Datensätze geschrieben.")
})

// - - - - - - - - - -
db.end()
