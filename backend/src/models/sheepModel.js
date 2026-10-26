import db from "./db.js";

const fields = ["name", "breed", "age", "sex"];

function editableValues(data) {
    return Object.fromEntries(
        fields
            .filter((field) => field in data)
            .map((field) => [field, data[field]])
    );
}

class SheepModel {
    // Lernkontext 2.3: Knex bindet Werte als Parameter; user_id begrenzt jeden Datenzugriff.
    list(userId) {
        return db("sheeps")
            .select("id", ...fields)
            .where({ user_id: userId })
            .orderBy("name", "asc");
    }

    find(userId, id) {
        return db("sheeps")
            .select("id", ...fields)
            .where({ user_id: userId, id })
            .first();
    }

    async create(userId, data) {
        const [id] = await db("sheeps").insert({
            user_id: userId,
            ...editableValues(data),
        });
        return this.find(userId, id);
    }

    async update(userId, id, data) {
        const changed = await db("sheeps")
            .where({ user_id: userId, id })
            .update(editableValues(data));
        return changed ? this.find(userId, id) : null;
    }

    async duplicate(userId, id) {
        const sheep = await this.find(userId, id);
        if (!sheep) return null;
        const copyName = `${sheep.name.slice(0, 32)} (Kopie)`;
        return this.create(userId, { ...sheep, name: copyName });
    }

    async remove(userId, id) {
        return db("sheeps").where({ user_id: userId, id }).del();
    }
}

export default new SheepModel();
