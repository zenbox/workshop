/** Sheep Route (View)
 *
 * @description EJS-Template Ausgabe für Sheep-Seiten
 *
 * @package MySoftware
 * @module sheepRoute
 * @author Michael Reichart <michael.reichart@gfu.net>
 * @version 1.0.0
 * @since 1.0.0 || 2026-07-28
 * @license MIT
 * @copyright ...
 */

"use strict";

import { Router } from "express";
import sheepModel from "../models/sheepModel.js";

const router = Router();

// GET /sheep  →  Liste aller Schafe als HTML-View
router.get("/", async (req, res) => {
    try {
        const sheeps = await sheepModel.list();
        res.render("sheep/index", { sheeps, title: "Alle Schafe" });
    } catch (err) {
        res.status(500).render("error", { message: err.message });
    }
});

// GET /sheep/:id  →  Einzelansicht
router.get("/:id", async (req, res) => {
    try {
        const sheep = await sheepModel.load(req.params.id);
        if (!sheep)
            return res
                .status(404)
                .render("error", { message: "Schaf nicht gefunden" });
        res.render("sheep/show", { sheep, title: sheep.name });
    } catch (err) {
        res.status(500).render("error", { message: err.message });
    }
});

export default router;
