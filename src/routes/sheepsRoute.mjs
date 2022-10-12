/** Sheep Routes
 *
 * @package Webapplication
 * @module Sheep
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import express from "express"
// - - - - - - - - - -
import SheepsController from "./../controller/SheepsController.class.mjs"
// - - - - - - - - - -

// Route config
const router = express.Router()
router.use(express.json())
router.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    )
    response.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    )

    next()
})

// Routes under / (/sheeps/)
// TODO Route stimmt nicht! sheeps/ sollte eigentlich obsolet sein.
const controller = new SheepsController()

router.get("/", (request, response, next) => {
    controller.selectAllSheeps(request, response, next)
})

router.get("/:id?", (request, response, next) => {
    controller.selectSheep(request, response, next)
})

router.delete("/delete/:id?", (request, response, next) => {
    controller.deleteSheep(request, response, next)
})

// router.post(route, (request, response, next) => {
//     controller.insertNewSheep(request, response, next)
// })

export default router
