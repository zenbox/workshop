import express from "express";
// - - - - - - - - - -
import IndexController from "./../controller/indexController.class.js";
// - - - - - - - - - -
const router = express.Router();
// - - - - - - - - - -

const indexController = new IndexController();

router.get("/", (request, response, next) => {
    indexController.getPage(request, response, next);
});

// - - - - - - - - - -
export default router;
