// Import desselben express-Moduls
import express from "express";

const router = express.Router();

// METHODS
const getLoginPage = () => {
    response.send("Login Page");
};
const getOtherPage = () => {
    response.send("Other Page");
};

// CONTROL
// Pfad nach der Basisroute /login
router.get("/", getLoginPage);
router.get("/other", getOtherPage);

export default router;
