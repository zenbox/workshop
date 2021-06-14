/* global console, require */
/**
 * database setup
 *
 * @package nodejs
 * @author Michael [michael@zenbox.de]
 * @since 2017/04/28
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
(function() {
  'use strict';
  // - - - - - - - - - -
  const mysql = require('mysql');
  const dbConfig = require('./db-config');

  let
    db = mysql.createConnection(dbConfig),
    sql = null;

  db.on('error', function(error) {
    console.log(error);
  });

  db.query('CREATE DATABASE IF NOT EXISTS application;');
  db.query('USE application;');

  // Tabelle anlegen
  db.query('DROP TABLE IF EXISTS user;');

  sql = "CREATE TABLE user ( " +
    "userId INT(11) AUTO_INCREMENT, " +
    "username VARCHAR(50), " +
    "email VARCHAR(50), " +
    "password VARCHAR(50), " +
    "PRIMARY KEY (userId) );";
  db.query(sql);

  sql = "INSERT INTO user " +
    "(username, email, password) " +
    "VALUES " +
    "('Michael', 'michael@zenbox.de', 'geheim')," +
    "('Paula', 'paula@zenbox.de', 'geheim')," +
    "('Klaus', 'klaus@zenbox.de', 'geheim');";

  db.query(sql, function() {
    console.log('Datensätze geschrieben.');
  });

  db.end();
  // - - - - - - - - - -
}());
