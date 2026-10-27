

import express from "express";

// Die Route kennt nur URLs und Methoden, keine Fachlogik
export function createHerdRouter(herdController) {
    const router = express.Router();

    // /herd -> /
    // ReST Aufrufe für herd/
    router.get("/", herdController.list);

    // router.post("/", herdController.create);
    // router.get("/:id", herdController.get);
    // router.put("/:id", herdController.update);
    // router.delete("/:id", herdController.delete);


    return router;
}
