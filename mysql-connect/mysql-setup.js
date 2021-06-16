/** Mysql Connection
 *
 * @package Webapplication
 * @module Search
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-15
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

const mysql = require('mysql');
const mysqlConfig = require('./mysql-config');

// let query = "SELECT * FROM sheeps;"

let
  db = mysql.createConnection(mysqlConfig),
  sql = null;

db.connect();

db.on('error', function (error) {
  console.log(error);
});

db.query('CREATE DATABASE IF NOT EXISTS animals;');
db.query('USE animals;');

// Tabelle anlegen
db.query('DROP TABLE IF EXISTS sheeps;');

sql = "CREATE TABLE sheeps ( " +
  "id INT(11) AUTO_INCREMENT, " +
  "sheep VARCHAR(50), " +
  "PRIMARY KEY (id) );";
db.query(sql);

sql = "INSERT INTO sheeps " +
  "(sheep) " +
  "VALUES " +
  "('Merinoschaf')," +
  "('Fleischschaf')," +
  "('Haarschaf');";

db.query(sql, function () {
  console.log('Datensätze geschrieben.');
});

db.end();