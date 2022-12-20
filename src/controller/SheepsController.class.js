/** Sheeps
 *
 * @package Webapplication
 * @module Sheeps
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-12-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import mysql from "mysql";
// - - - - - - - - - -
import dbConfig from "./../model/dbConfig.js";
// - - - - - - - - - -

export default class SheepsController {
    constructor() {}

    selectAllSheeps(request, response, next) {
        const db = mysql.createConnection(dbConfig);

        try {
            // - - - - - - - - - -
            db.connect();
        } catch (error) {
            console.log("Database ist not connectable ...");
            return false;
        }

        try {
            let view = "indexView",
                data = undefined,
                sql = undefined;

            sql = "SELECT * FROM sheeps WHERE 1;";

            db.query(sql, (error, resultset) => {
                // console.log(resultset);

                data = { list: resultset };
                response.status(200).render(view, data);

                db.close();
            });
            // - - - - - - - - - -
            // - - - - - - - - - -
        } catch (error) {
            console.log("No sheeps ...");
            console.log(error);
            return false;
        }
        // - - - - - - - - - -
    }
}
