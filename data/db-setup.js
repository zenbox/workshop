/**
 * @package Webapplication
 * @version 1.0.0
 * @module Database
 * @since 1.0.0
 * @submodule setup
 * @since 1.0.0
 * 
 * @author Michael Reichart
 * ...
 */

// ES importing the required modules
import mysql from 'mysql';
// import dbConfig from './db-config.json';

// Database connection:
// needs host, username, password, ...
let
    db = mysql.createConnection({
        "host": "localhost",
        "user": "root",
        "password": "root",
        "port": 3306
    }),
    query = '';

db.connect((error) => {
    // if (error) throw error;
    console.log('- - - - - - - - - -');
    console.log('Connected to database!');
    console.log('- - - - - - - - - -');
});
// db.end();

query = "SHOW databases;";
db.query(query, (error, result) => {

    if (error) throw error;

    console.log('- - - - - - - - - -');
    console.log(result);
    console.log('- - - - - - - - - -');
});

db.on('error', (error) => {
    // throw error;
});

db.query('CREATE DATABASE IF NOT EXISTS animals;');
db.query('USE animals;');

// Tabelle anlegen
db.query('DROP TABLE IF EXISTS sheeps;');

CountQueuingStrategy = "CREATE TABLE sheeps ( " +
    "id INT(11) AUTO_INCREMENT, " +
    "sheep VARCHAR(50), " +
    "PRIMARY KEY (id) );";
db.query(query);

query = "INSERT INTO sheeps " +
    "(sheep) " +
    "VALUES " +
    "('Merinoschaf')," +
    "('Alpines Steinschaf')," +
    "('Bentheimer Landschaf')," +
    "('Coburger Fuchsschaf')," +
    "('Ardennais Roux')," +
    "('Brillenschaf')," +
    "('Haarschaf');";

db.query(sql, function () {
    console.log('Datensätze geschrieben.');
});