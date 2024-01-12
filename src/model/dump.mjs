import dbms from "mysql";
import dbConfig from "./dbConfig.mjs";

let i = 1;

// Params: host, user, password [, port, database]
let db = dbms.createConnection(dbConfig),
    sql = null;

db.on("error", function (error) {
    console.log(error);
});

db.query("CREATE DATABASE IF NOT EXISTS animals;", (error, result) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`${i++}. Datenbank angelegt.`);
});
db.query("USE animals;", (error, result) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`${i++}. Datenbank ausgewählt.`);
});

// Tabelle anlegen
db.query("DROP TABLE IF EXISTS sheeps;", (error, result) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`${i++}. Tabelle gelöscht.`);
});

sql = `
    CREATE TABLE sheeps (
        id INT(11) AUTO_INCREMENT, 
        sheep VARCHAR(50),
    PRIMARY KEY (id) );
    `;

db.query(sql, (error, result) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`${i++}. Tabelle angelegt.`);
});

sql = `
    INSERT INTO sheeps 
        (sheep) 
    VALUES 
        ('Merinoschaf'),
        ('Bergschaf'),
        ('Wollschaf'),
        ('Schmuckschaf'),
        ('Haarschaf');
`;
db.query(sql, function (error, result) {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`${i++}. Datensätze geschrieben.`);
    return true;
});

db.end();
