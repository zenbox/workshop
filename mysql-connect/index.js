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

let
    db = mysql.createConnection(mysqlConfig),
    query = null;

db.connect();

db.on('error', function (error) {
    console.log(error);
});

db.query(`USE ${mysqlConfig.more.database};`);

query = `SELECT * FROM ${mysqlConfig.more.table}`;

// Send query to mysql
db.query(query, function (error, result) {

    if (error) {
        console.log(error);
        process.exit(0);
    }

    console.log(result);
});