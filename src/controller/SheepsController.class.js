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

                // db.close();
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

    deleteSheep(request, response, next) {
        const db = mysql.createConnection(dbConfig);

        let idString = "1,13,42,8";
        let ids = idString.split(",");
        console.log(ids);

        let id = request.params.id,
            sql = `DELETE FROM sheeps WHERE id="${id}";`;

        db.connect();
        db.query(sql, (error, resultset) => {
            if (error) throw response.status(200).json({ reload: false });
            response.status(200).json({ reload: true });
        });
    }
}
