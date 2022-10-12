/** Sheeps Controller
 *
 * @package Webapplication
 * @module Sheeps
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import mysql from "mysql"
// - - - - - - - - - -
import dbConfig from "./dbConfig.mjs"

export default class SheepsController {
    constructor() {
        this.init()
    }
    init() {}

    selectAllSheeps(request, response, next) {
        let view = "sheepsView"

        // db connect
        const db = mysql.createConnection(dbConfig)
        db.connect()

        // db query
        db.query("SELECT * FROM sheeps WHERE 1;", (error, resultset) => {
            if (error) throw response.status(404).render(errorView404)

            response.status(200).render(view, { data: resultset })

            // db end
            db.end()
        })
    }

    selectSheep(request, response, next) {
        let view = "sheepsView",
            id = request.params.id

        // db connect
        const db = mysql.createConnection(dbConfig)
        db.connect()

        db.query(
            `SELECT * FROM sheeps WHERE id = ${id};`,
            (error, resultset) => {
                if (error) throw response.status(404).render(errorView404)

                response.status(200).render(view, { data: resultset })

                // db end
                db.end()
                return true
            }
        )
        // db.end()
        return false
    }

    deleteSheep(request, response, next) {
        let view = "sheepsView",
            id = request.params.id

        console.log("DELETE ...")

        // db connect
        const db = mysql.createConnection(dbConfig)
        db.connect()

        db.query(
            `DELETE * FROM sheeps WHERE id = ${id};`,
            (error, resultset) => {
                if (error) throw response.status(404).render(errorView404)

                response.status(200).json({ reload: true })

                // db end
                db.end()
                return true
            }
        )
        // db.end()
        return false
    }

    insertNewSheep(request, response, next) {}
}
