/** Search Component
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

// Declaration
const path = require('path');
const express = require('express');
const router = express.Router();

// Database connection
const mysql = require('mysql');
const mysqlConfig = require('./../mysql-config');
const db = mysql.createConnection(mysqlConfig);

let query = null;

db.connect();
db.on('error', function (error) {
    console.log(error);
});
db.query(`USE ${mysqlConfig.more.database};`);

// Methods
function onGetRequest(request, response) {

    let data = {
        search: ''
    };

    response.render('templateForSearch', data)
}

function onSearchRequest(request, response) {
    let data = null,
        query = `SELECT * FROM ${mysqlConfig.more.table}`;

    db.query(query, (error, result) => {
        if (error) {
            console.log(error);
            process.exit(0);
        }

        // result = require(path.join(__dirname, '../data/sheeps.json'));

        data = {
            search: request.query.search,
            result: result
        };

        response.render('templateForSearch', data);
    });



}


// Deliver /search/index.html
router.get('/index.html', onGetRequest);

// Form get request to search.html
router.get('/search.html', onSearchRequest);


// Exports
module.exports = router;