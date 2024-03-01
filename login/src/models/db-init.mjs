import mysql from "mysql";
import fs from "fs";

import dbConfig from "./db-config.mjs";

// Credentials für die Datenbank!
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Conection Failed");
    }
});

let filePath, sql;

filePath = "./users.sql";
sql = fs.readFileSync(filePath, { encoding: "utf-8" });

connection.query(sql, (err, results, fields) => {
    if (err) {
        console.log(err.message);
    }
    console.log("User table written.");
});

filePath = "./cookie-user.sql";
sql = fs.readFileSync(filePath, { encoding: "utf-8" });

connection.query(sql, (err, results, fields) => {
    if (err) {
        console.log(err.message);
    }
    console.log("Cookie session table written.");
});

console.log("Disonnected");

connection.end();
