/** Search application (middleware)
 **
 * @package Webapplication
 * @module search
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
const express = require('express');
const router = express.Router();

// Create a database connection
const mysql = require('mysql');
const mysqlCredentials = require('../mysqlCredentials.json');
const db = mysql.createConnection(mysqlCredentials);

db.connect();
db.on('error', (error) => {
    console.log(error);
});


let query = "SELECT * FROM mysql.user;";
db.query(query, (error, response) => {
    if (error) {
        console.log(error);
        process.exit(0);
    }

    
    console.log('- - - - -');
    console.log(`${response.length} datasets found.`);
    console.log('- - - - -');
    console.log(response[0].Host);
    console.log(response[0].User);
    console.log(response[0].Password);
    console.log('- - - - -');

});

function onGetRequest(request, response) {

    let pseudoData = {
        "key1": "value",
        "key2": "value"
    };

    response.render(
        'search', // Template for search
        pseudoData
    );

}

// Control
router.get('/', onGetRequest);
module.exports = router;