// Import desselben express-Moduls
import express from "express";

// Import der Controller-Funktionen
import {
    getLoginData,
    showLoginData,
} from "../controllers/loginController.mjs";

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

// CONTROL
// Pfad nach der Basisroute /login
router.get("/", getLoginData);
router.post("/", showLoginData);

export default router;
