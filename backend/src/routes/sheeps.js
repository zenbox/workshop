/** Sheeps Router
 *
 *
 * @package Backend Service
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

// in Express: export {Router, ..., ...};
import { Router } from "express";
// ! createSheep importieren
import {
    initSheepModel,
    listSheeps,
    loadSheep,
    createSheep,
} from "../models/sheep.js";

await initSheepModel();
const r = Router();

let sheeps = [
    { id: 1, name: "Dolly", age: 4 },
    { id: 2, name: "Shaun", age: 3 },
    { id: 3, name: "Wooly", age: 5 },
];

// GET /api/sheeps/
// ! async ergänzen und listSheeps verwenden!
r.get("/", async (req, res) => {
    let sheeps = await listSheeps();
    res.status(200).json(sheeps);
});

// GET /api/sheeps/:id -> EIN SCHAF!
// ! async ergänzen und loadSheep verwenden!
r.get("/:id", async (req, res) => {
    // req.params liefert alle URL Parameter als String!

    const id = parseInt(req.params.id, 10);
    // const sheep = sheeps.find((s) => s.id === id);
    const sheep = await loadSheep(id);

    if (sheep) {
        res.status(200).json(sheep);
    }
});

// ! POST /api/sheeps/ -> NEUES SCHAF ANLEGEN
r.post("/", async (req, res) => {
    console.log("Body:", req.body);
    let data = req.body;
    const newSheep = await createSheep(data);
    res.status(201).json(newSheep);
});

// PUT /api/sheeps/:id -> SCHAF AKTUALISIEREN
r.put("/:id", (req, res) => {});

// PATCH /api/sheeps/:id -> SCHAF TEILAKTUALISIEREN
r.patch("/:id", (req, res) => {});

// DELETE /api/sheeps/:id -> SCHAF LÖSCHEN
r.delete("/:id", (req, res) => {});

export default r;
