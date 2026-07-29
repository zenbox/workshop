import sheepModel from "../models/sheepModel.js";

// GET /api/sheeps
export async function index(req, res) {
    try {
        const sheeps = await sheepModel.list();
        res.json(sheeps);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// GET /api/sheeps/:id
export async function show(req, res) {
    try {
        const sheep = await sheepModel.load(req.params.id);
        if (!sheep) return res.status(404).json({ error: "Nicht gefunden" });
        res.json(sheep);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// POST /api/sheeps
export async function create(req, res) {
    try {
        const { name } = req.body;
        if (!name)
            return res.status(400).json({ error: "name ist Pflichtfeld" });

        const sheep = await sheepModel.create({ name });
        res.status(201).json(sheep);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// PUT /api/sheeps/:id
export async function update(req, res) {
    try {
        const { name } = req.body;
        if (!name)
            return res.status(400).json({ error: "name ist Pflichtfeld" });

        const sheep = await sheepModel.update(req.params.id, { name });
        res.json(sheep);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// DELETE /api/sheeps/:id
export async function remove(req, res) {
    try {
        await sheepModel.delete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
