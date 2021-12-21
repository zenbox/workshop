/** Installing und set up the mysql database and data
 *
 * @package Webapplication
 * @module Setup
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

const mysql = require('mysql');
const mysqlCredentials = require('./mysqlCredentials.json');
const db = mysql.createConnection(mysqlCredentials);

// Open a db handle
db.connect();
db.on('error', (error) => {
    console.log(error);
});

// SQL Dump
db.query('CREATE DATABASE IF NOT EXISTS animals;');
db.query('USE animals;');

// Tabelle anlegen
db.query('DROP TABLE IF EXISTS sheeps;');

let query = "CREATE TABLE sheeps ( " +
    "id INT(11) AUTO_INCREMENT, " +
    "sheep VARCHAR(50), " +
    "PRIMARY KEY (id) );";
db.query(query);

query = "INSERT INTO sheeps " +
    "(sheep) " +
    "VALUES " +
    "('Merinoschaf')," +
    "('Fleischschaf')," +
    "('Haarschaf');";

db.query(query, function () {
    console.log('Datensätze geschrieben.');
});


// Close the db handle
db.end();