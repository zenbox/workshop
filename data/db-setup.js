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

// Importing the required modules
import {
    mysql
} from 'mysql';

let db = mysql.createConnection({}),
    query = '';

db.connect((err) => { });
db.query(query, (err, result) => { });