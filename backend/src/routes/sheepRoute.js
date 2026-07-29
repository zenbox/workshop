/** Login Route
 *
 * @description Output generator ES-module for a login page and ...
 *
 * @package MySoftware
 * @module login
 * @author Michael Reichart <michael.reichart@gfu.net>
 * @version 1.0.0
 * @since 1.0.0 || 2026-07-28
 * @license MIT
 * @copyright ...
 */

// 0. Interpreter-Anweisung
"use strict";

// 1.1 Interne Libraries
// keine

// 1.2 Externe Libraries
import express, { Router } from "express";

// 1.3 Eigene Module (Libraries)
import sheepModel from "../models/sheepModel.js";

// 2.1 Variablendeklaration
const router = Router();

// 2.2 Konfiguration
const router = express.Router();

// GET    /sheeps     -> alle Schafe
// GET    /sheeps/:id -> ein Schaf
// POST   /sheeps     -> neues Schaf anlegen
// PUT    /sheeps/:id -> Schaf komplett aktualisieren
// PATCH  /sheeps/:id -> Schafausschnitt aktualisieren
// DELETE /sheeps/:id -> Schaf löschen
// QUERY -> Jetzt neu!!

router.get("/", async (req, res) => {
    const sheeps = await sheepModel.list();
    res.json(sheeps);
});

router.get("/:id", async (req, res) => {
    const sheep = await sheepModel.load(req.params.id);
    if (!sheep) return res.status(404).json({ error: "Nicht gefunden" });
    res.json(sheep);
});

router.post("/", async (req, res) => {
    const sheep = await sheepModel.create(req.body);
    res.status(201).json(sheep);
});

router.put("/:id", async (req, res) => {
    const sheep = await sheepModel.update(req.params.id, req.body);
    res.json(sheep);
});

router.delete("/:id", async (req, res) => {
    await sheepModel.delete(req.params.id);
    res.status(204).send();
});

export default router;
