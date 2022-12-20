import express from "express";
// - - - - - - - - - -
import IndexController from "../controller/IndexController.class.js";
// - - - - - - - - - -
const router = express.Router();
// - - - - - - - - - -

const indexController = new IndexController();

router.get("/", (request, response, next) => {
    indexController.getPage(request, response, next);
});

router.post("page-2/state/")

// - - - - - - - - - -
export default router;
