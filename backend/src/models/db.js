/** Database Middleware
 *
 * @package Backend
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2026-07-29
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2026 Michael Reichart, Cologne
 *
 */

import knex from "knex"; // Knex ist ein SQL Query Builder für Node.js
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync } from "node:fs";

const backendRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const dbFile = resolve(
    process.env.DATABASE_FILE || join(backendRoot, "data", "sheeps.sqlite")
);

mkdirSync(dirname(dbFile), { recursive: true });

const db = knex({
    client: "sqlite3",
    connection: { filename: dbFile },
    useNullAsDefault: true,
    pool: {
        afterCreate(connection, done) {
            connection.run("PRAGMA foreign_keys = ON", done);
        },
    },
});

// Lernkontext 2.3: Bestehende Daten bleiben erhalten; neue Felder kommen additiv hinzu.
export async function initializeDatabase() {
    if (!(await db.schema.hasTable("users"))) {
        await db.schema.createTable("users", (table) => {
            table.increments("id").primary();
            table.string("email", 254).notNullable().unique();
            table.string("password_hash").notNullable();
            table.integer("created_at").notNullable();
        });
    }

    if (!(await db.schema.hasTable("sheeps"))) {
        await db.schema.createTable("sheeps", (table) => {
            table.increments("id").primary();
            table
                .integer("user_id")
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE");
            table.string("name", 40).notNullable();
            table.string("breed", 40).notNullable();
            table.integer("age").notNullable();
            table.string("sex", 20).notNullable();
        });
    } else {
        const additions = [
            [
                "user_id",
                (table) =>
                    table
                        .integer("user_id")
                        .nullable()
                        .references("id")
                        .inTable("users")
                        .onDelete("CASCADE"),
            ],
            [
                "breed",
                (table) =>
                    table
                        .string("breed", 40)
                        .notNullable()
                        .defaultTo("Ouessant"),
            ],
            ["age", (table) => table.integer("age").notNullable().defaultTo(1)],
            [
                "sex",
                (table) =>
                    table.string("sex", 20).notNullable().defaultTo("Weiblich"),
            ],
        ];

        const existingColumns = await Promise.all(
            additions.map(([column]) => db.schema.hasColumn("sheeps", column))
        );
        const missingColumns = additions.filter(
            (_, index) => !existingColumns[index]
        );
        if (missingColumns.length > 0) {
            await db.schema.alterTable("sheeps", (table) => {
                for (const [, addColumn] of missingColumns) addColumn(table);
            });
        }
    }

    if (!(await db.schema.hasTable("sessions"))) {
        await db.schema.createTable("sessions", (table) => {
            table.string("session_hash", 64).primary();
            table
                .integer("user_id")
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE");
            table.string("csrf_token", 64).notNullable();
            table.integer("expires_at").notNullable();
        });
    }

    await db.raw(
        "CREATE INDEX IF NOT EXISTS sheeps_user_id_index ON sheeps(user_id)"
    );
    return db;
}

export default db;
