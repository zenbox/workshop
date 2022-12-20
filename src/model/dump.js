import dbms from "mysql";
import dbConfig from "./dbConfig.js";

let db = dbms.createConnection(dbConfig),
    sql = null;

db.on("error", function (error) {
    console.log(error);
});

db.query("CREATE DATABASE IF NOT EXISTS animals;");
db.query("USE animals;");

// Tabelle anlegen
db.query("DROP TABLE IF EXISTS sheeps;");

sql =
    "CREATE TABLE sheeps ( " +
    "id INT(11) AUTO_INCREMENT, " +
    "sheep VARCHAR(50), " +
    "PRIMARY KEY (id) );";
db.query(sql);

sql =
    "INSERT INTO sheeps " +
    "(sheep) " +
    "VALUES " +
    "('Merinoschaf')," +
    "('Bergschaf')," +
    "('Haarschaf');";

db.query(sql, function () {
    console.log("Datensätze geschrieben.");
});

db.end();
