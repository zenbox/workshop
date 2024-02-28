// Import desselben express-Moduls
import express from "express";

// Import der Controller-Funktionen
import SheepsController from "../controllers/sheepController.mjs";
const sheeps = new SheepsController();

// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// CONFIGURATION
const router = express.Router();

// bodyParser() ist ein Middleware-Modul, das den Body der Request-Objekte ausliest und in ein JSON-Objekt umwandelt. Ist aber veraltet!

// Liest heute den Body aus und gibt die Daten als JSON zrück
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// http-settings
router.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    response.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -

// CONTROL
// Pfad nach der Basisroute /sheeps
router.get("/:id", (request, response, next) => {
    sheeps.selectSheepById(request, response, next);
});

router.get("/", (request, response, next) => {
    sheeps.selectAllSheeps(request, response, next);
});

router.post("/", (request, response, next) => {
    sheeps.insertSheep(request, response, next);
});

router.patch("/:id", (request, response, next) => {
    sheeps.updateSheep(request, response, next);
});

router.delete("/:id", (request, response, next) => {
    sheeps.deleteSheep(request, response, next);
});

export default router;

// let fnPointer = function (event) {};

// button.addEventlistener("click", fnPointer);

// function addEventListener(type, fn) {
//     const event = {};
//     event.type = type;
//     // ...
//     // ...
//     fn(event);
// }
