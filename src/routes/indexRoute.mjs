/** Index Routes
 *
 * @package Webapplication
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-10-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import express from "express";
// - - - - - - - - - -
import IndexController from "./../controller/IndexController.class.mjs";
// - - - - - - - - - -

// Route config
const router = express.Router();

// Routes under / (root)
const indexRoutes = ["/", "/page"];
const indexController = new IndexController();

indexRoutes.forEach((route) => {
  router.get(route, (request, response, next) => {
    indexController.getPage(request, response, next);
  });
});

export default router;
