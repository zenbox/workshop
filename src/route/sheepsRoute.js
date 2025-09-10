/** SHEEPS LIST
 *
 * @package Webapplication
 * @module ROUTES
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import express from "express";
import SheepsController from "./../control/sheepController.js";

// Instanciate a controller
const sheepsController = new SheepsController("./src/model/database.db");

const sheepsRoute = express.Router();

// get all sheeps
sheepsRoute.get("/", (request, response) => {
    const rows = sheepsController.getAllSheeps();

    response.render("sheeps-list", {
        title: "Sheeps List",
        data: rows,
    });
});

// Get a certain sheep
sheepsRoute.get("/:id", (request, response) => {
    const row = sheepsController.getSheep(id);

    response.render("sheeps-view", {
        title: "Sheeps View",
        data: row,
    });
});

// Insert a new sheep
sheepsRoute.post("/", (request, response) => {
    sheepsController.insertSheep(request.body);
});




// complete update
sheepsRoute.put("/:id", (request, response) => {
    sheepsController.updateSheep(id, request.body);
});

// partial update
sheepsRoute.patch("/:id", (request, response) => {
     sheepsController.updateSheep(id, request.body);

});

// delete
sheepsRoute.delete("/:id", (request, response) => {
    sheepsController.deleteSheep(id, request.body);
});
export default sheepsRoute;
