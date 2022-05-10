/** Search processor
 * 
 * @desc This delivers some table data.
 * @module SearchProcessor
 * @author Michael Reichart
 * @version 0.0.1
 * @since 0.0.1
 * @copyright 2022 Michael Reichart
 * @see {@link https://nodejs.org/api/http.html}
 * @requires http
 * @license MIT
 */

// Importing the required modules
import express from 'express';
import path from 'path';
import mysql from 'mysql';

// Declaration
const router = express.Router();
const db = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "root",
    "port": 3306
});

let query = '';

db.connect((error) => {
    // if (error) throw error;
    console.log('- - - - - - - - - -');
    console.log('Connected to database!');
    console.log('- - - - - - - - - -');
});
// db.end();

// - - - - - - - - - -

db.on('error', (error) => {
    throw error;
});

db.query("USE animals;", (error, result) => {
    console.log('- - - - - - - - - -');
    console.log('Db: switch to animals.');
    console.log('- - - - - - - - - -');
});


// - - - - - - - - - -
function onRequestIndex(request, response) {
    let data = [];
    response.render('searchView', data);
}

function onRequestSearch(request, response) {
    let data = [];
    let query = `SELECT * FROM sheeps WHERE sheep LIKE '%${request.query.search}%';`;

    db.query(query, (error, result) => {
        if (error) throw error;

        console.log(request.query.search);

        data = result;
        response.render('searchView', data);
    });


}

// Already in /search/ 'cause of get('/search' ..) in index.js
router.get('/', onRequestIndex);
router.get('/index.html', onRequestIndex);

router.get('/search.html', onRequestSearch);

// - - - - - - - - -
// Export as module
export default router;