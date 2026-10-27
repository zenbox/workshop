import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class Database {
    constructor(db) {
        this.db = db;
    }
    
    static async open(filename) {
        await fs.mkdir(path.dirname(filename), { recursive: true });
        const db = await open({
            filename,
            driver: sqlite3.Database,
        });
        // - - - -

        // Fremdschlüssel sind pro Verbindung standardmäßig AUS
        await db.exec("PRAGMA foreign_keys = ON");

        // Legt die DB anhand des Schemas an, wenn sie noch nicht existiert
        const schema = await fs.readFile(
            path.join(__dirname, "schema.sql"),
            "utf-8"
        );
        await db.exec(schema);
        // - - - -
        return new Database(db);
    }

    close() {
        return this.db.close();
    }
}
