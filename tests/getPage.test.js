import jest from "jest"
import puppeteer from "puppeteer"
import express from "express"
// - - - - - - - - - -
import IndexController from "./../src/controller/IndexController.class.mjs"
// - - - - - - - - - -
// Route config
const router = express.Router()

let indexController = new IndexController()

function doThis() {
    router.get("/", (request, response, next) => {
        return indexController.getPage(request, response, next)
    })
    return true
}

console.log(test)

test("root request /", () => {
    expect(doThis()).toBe(true)
})
