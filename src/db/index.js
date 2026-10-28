import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { hashPassword, verifyPassword } from "../services/passwordService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrateLogin(db) {
    await db.exec("BEGIN IMMEDIATE");
    try {
        const columns = await db.all("PRAGMA table_info(users)");
        if (!columns.some((column) => column.name === "email")) {
            await db.exec("ALTER TABLE users ADD COLUMN email TEXT");
        }
        if (!columns.some((column) => column.name === "password_hash")) {
            await db.exec("ALTER TABLE users ADD COLUMN password_hash TEXT");
        }
        const users = await db.all(
            "SELECT id, email FROM users WHERE email IS NOT NULL"
        );
        const emails = new Set();
        const normalized = users.map((user) => {
            if (typeof user.email !== "string")
                throw new Error("Ungueltige E-Mail bei der Login-Migration.");
            const email = user.email.trim().toLowerCase();
            if (!email || email.length > 254)
                throw new Error("Ungueltige E-Mail bei der Login-Migration.");
            if (emails.has(email))
                throw new Error("E-Mail-Konflikt bei der Login-Migration.");
            emails.add(email);
            return { ...user, normalizedEmail: email };
        });
        await Promise.all(
            normalized
                .filter((user) => user.email !== user.normalizedEmail)
                .map((user) =>
                    db.run(
                        "UPDATE users SET email = ? WHERE id = ?",
                        user.normalizedEmail,
                        user.id
                    )
                )
        );
        await db.exec(
            "CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email COLLATE NOCASE)"
        );
        await db.exec("COMMIT");
    } catch (error) {
        await db.exec("ROLLBACK");
        throw error;
    }
}

async function prepareDemoUser(db, environment, { id, prefix }) {
    const rawEmail = environment[`${prefix}_EMAIL`];
    const password = environment[`${prefix}_PASSWORD`];
    if (rawEmail === undefined && password === undefined) return null;
    const email =
        typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
    if (
        !email ||
        email.length > 254 ||
        typeof password !== "string" ||
        !password ||
        password.length > 200
    ) {
        throw new Error(`Ungueltige Demo-Konfiguration fuer ${prefix}.`);
    }
    const user = await db.get(
        "SELECT email, password_hash FROM users WHERE id = ?",
        id
    );
    if (!user) throw new Error(`Demo-Benutzer ${id} fehlt.`);
    if (!user.email && !user.password_hash) {
        return { id, email, hash: await hashPassword(password) };
    }
    if (
        user.email !== email ||
        !(await verifyPassword(password, user.password_hash))
    ) {
        throw new Error(
            `Bestehende Zugangsdaten fuer ${prefix} werden nicht ueberschrieben.`
        );
    }
    return null;
}

export async function seedDemoUsers(db, environment = process.env) {
    const accounts = [
        { id: 1, prefix: "DEMO_USER" },
        { id: 2, prefix: "DEMO_SECOND_USER" },
    ];
    const prepared = await Promise.all(
        accounts.map((account) => prepareDemoUser(db, environment, account))
    );
    await db.exec("BEGIN IMMEDIATE");
    try {
        await Promise.all(
            prepared
                .filter(Boolean)
                .map(({ id, email, hash }) =>
                    db.run(
                        "UPDATE users SET email = ?, password_hash = ? WHERE id = ?",
                        email,
                        hash,
                        id
                    )
                )
        );
        await db.exec("COMMIT");
    } catch (error) {
        await db.exec("ROLLBACK");
        throw error;
    }
}

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
        try {
            await db.exec("PRAGMA foreign_keys = ON");

            // Legt die DB anhand des Schemas an, wenn sie noch nicht existiert
            const schema = await fs.readFile(
                path.join(__dirname, "schema.sql"),
                "utf-8"
            );
            await db.exec(schema);
            await migrateLogin(db);
            return new Database(db);
        } catch (error) {
            await db.close();
            throw error;
        }
    }

    close() {
        return this.db.close();
    }
}
