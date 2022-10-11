import mysql from "mysql"

const dbConfig = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "miromiro",
    database: "animals",
}

let db = mysql.createConnection(dbConfig),
    sql = null

db.on("error", function (error) {
    console.log(error)
})

db.query("CREATE DATABASE IF NOT EXISTS animals;")
db.query("USE animals;")

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

db.end()
