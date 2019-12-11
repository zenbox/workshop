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
  const express = require('express');
  const router = express.Router();
  const mysql = require('mysql');

  let dbConfig = require('../db-config.json'),
    db = null,
    query = null;

  // connect the database service
  dbConfig.database = dbConfig.more.database;
  db = mysql.createConnection(dbConfig);

  // the users route app
  router.get('/', function (request, response) {
    query = 'SELECT * FROM user WHERE 1;';
    db.query(query, function (error, result) {

      if (error) {
        console.dir(error);
        process.exit(0);
      }

      console.dir(result);

      response.render(
        'users', {
          title: ' a mysql result',
          result: result
        }
      );

    });
  });

  module.exports = router;
  // - - - - - - - - - - -
}());