import express from "express";

// Die Route kennt nur URLs und Methoden, keine Fachlogik
export function createHerdRouter(herdController) {
    const router = express.Router();

    router.get("/", herdController.list);

    return router;
}
