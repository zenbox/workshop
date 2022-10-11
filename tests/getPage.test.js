import express from "express";
// - - - - - - - - - -
import IndexController from "./../src/controller/IndexController.class.mjs";
// - - - - - - - - - -
// Route config
const router = express.Router();

let indexController = new IndexController();

function doThis() {
  router.get("/", (request, response, next) => {
    indexController.getPage(request, response, next);
  });
}

test("root request /", () => {
  expect(doThis().toBe(true));
});
