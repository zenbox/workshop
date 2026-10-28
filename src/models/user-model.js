export class UserModel {
    constructor(database) {
        this.db = database.db;
    }

    findByEmail(email) {
        return this.db.get(
            "SELECT id, name, email, password_hash FROM users WHERE email = ?",
            email
        );
    }

    findById(id) {
        return this.db.get(
            "SELECT id, name, email FROM users WHERE id = ?",
            id
        );
    }
}
