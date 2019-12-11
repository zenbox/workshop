/* global console, window, document */
/**
 * index route for mysql-application
 *
 * @package webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2017/05/24
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
  'use strict';
  // - - - - - - - - - - -
  const DEBUG = true;
  const express = require('express');
  const router = express.Router();
  const mysql = require('mysql');

  let
    dbConfig = require('../db-config.json'),
    db = undefined,
    query = undefined;

  // connect the database service
  dbConfig.database = dbConfig.more.database;
  db = mysql.createConnection(dbConfig);

  // the users route app
  router.get('/', function (request, response) {

    // database transactions ...
    query = 'SELECT * FROM user WHERE 1;';
    db.query(query, function (error, rows) {

      if (error) {
        console.dir(error);
        process.exit(0);
      }

      if (DEBUG) console.dir(rows);
      // if (DEBUG) debugger;

      response.render(
        'users', {
          title: ' a mysql result',
          result: rows
        }
      );

    });
  });

  module.exports = router;
  // - - - - - - - - - - -
}());