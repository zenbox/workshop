import express from "express";

// Die Route kennt nur URLs und Methoden, keine Fachlogik
export function createHerdRouter(herdController) {
    const router = express.Router();

    // /herd -> /
    // ReST Aufrufe für herd/
    router.get("/", herdController.list);
    router.post("/", herdController.create);
    router.get("/:id", herdController.get);
    router.put("/:id", herdController.update); // full update
    router.delete("/:id", herdController.delete);

    // Wir verzichten auf PATCH-Methoden für die Teilaktualisierung
    // router.patch("/:id", herdController.update) // partial update;
    // Ganz neu
    // router.query("/", herdController.query); // example for query endpoint

    return router;
}
