/**
 * A Simple Mysql App
 * @author Michael
 * @since 2019/01/30    
 * @version 1.0.0
 */

'use strict';

const mysql = require('mysql');
const dbConfig = require('./db-config');

let
    db = undefined,
    sql = undefined;

// database connection
db = mysql.createConnection(dbConfig);

db.on('error', function (error) {
    console.log(error);
})

db.on('connect', function () {
    console.log('connect!');
})

// create database
sql = "CREATE DATABASE IF NOT EXISTS application;";
db.query(sql);
db.query('USE application');

// create table
sql = "DROP TABLE IF EXISTS user;";
db.query(sql);

sql = "CREATE TABLE user ( " +
    "userId INT(11) AUTO_INCREMENT, " +
    "username VARCHAR(50), " +
    "email VARCHAR(50), " +
    "password VARCHAR(50), " +
    "PRIMARY KEY (userId) );";
db.query(sql);

// insert values
sql = "INSERT INTO user " +
    "(username, email, password) " +
    "VALUES " +
    "('Michael', 'michael@zenbox.de', 'nichtgeheim')," +
    "('Paula', 'paula@zenbox.de', 'ganzgeheim')," +
    "('Klaus', 'klaus@zenbox.de', 'auchgeheim');";

db.query(sql, function () {
    console.log('Datensätze geschrieben.');
});

// close the database handle
db.end()