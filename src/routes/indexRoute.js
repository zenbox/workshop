import express from "express";
// - - - - - - - - - -
import IndexController from "../controller/IndexController.class.js";
import SheepsController from "../controller/SheepsController.class.js";
// - - - - - - - - - -
const router = express.Router();
// - - - - - - - - - -
const indexController = new IndexController();
const sheepsController = new SheepsController();
// - - - - - - - - - -
router.get("/", (request, response, next) => {
    indexController.getPage(request, response, next);
});

router.get("/sheeps", (request, response, next) => {
    sheepsController.selectAllSheeps(request, response, next);
});

// router.post("page-2/state/");

// - - - - - - - - - -
export default router;
