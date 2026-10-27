// Speichert nur. Fachregeln (Validierung, Trimmen) kommen später in den Service.
export class SheepModel {
    constructor(database) {
        this.db = database.db;
    }

    list(userId) {
        return this.db.all(
            "SELECT * FROM sheep WHERE user_id = ? ORDER BY id",
            userId
        );
    }

    listAll() {
        return this.db.all(
            `SELECT sheep.*, users.name AS owner_name
             FROM sheep
             JOIN users ON users.id = sheep.user_id
             ORDER BY sheep.id`
        );
    }

    get(userId, id) {
        return this.db.get(
            "SELECT * FROM sheep WHERE id = ? AND user_id = ?",
            id,
            userId
        );
    }

    async create(userId, { name, breed, age, gender, iconKey = "sheep" }) {
        // Werte werden gebunden (?), nicht per String zusammengesetzt
        const result = await this.db.run(
            `INSERT INTO sheep (user_id, name, breed, age, gender, icon_key)
       VALUES (?, ?, ?, ?, ?, ?)`,
            userId,
            name,
            breed,
            age,
            gender,
            iconKey
        );
        return this.get(userId, result.lastID);
    }

    async update(userId, id, { name, breed, age, gender }) {
        const result = await this.db.run(
            `UPDATE sheep
     SET name = ?, breed = ?, age = ?, gender = ?, updated_at = datetime('now')
     WHERE id = ? AND user_id = ?`,
            name,
            breed,
            age,
            gender,
            id,
            userId
        );

        // Kein Treffer: ID existiert nicht oder gehört einem anderen Benutzer
        if (result.changes === 0) return null;

        return this.get(userId, id);
    }

    async delete(userId, id) {
        const result = await this.db.run(
            "DELETE FROM sheep WHERE id = ? AND user_id = ?",
            id,
            userId
        );
        return result.changes > 0;
    }
}
