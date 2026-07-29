/** Database Middleware
 *
 * @package Backend
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import knex from "knex"; // Knex ist ein SQL Query Builder für Node.js
import { join } from "node:path";
import { mkdirSync } from "node:fs";

// join: Verbindet Pfadsegmente zu einem einzigen Pfad
// process.cwd: aktuelles Arbeitsverzeichnis des Node.js-Prozesses
const dbFile = join(process.cwd(), "data", "sheeps.sqlite");

// Stelle sicher, dass das Verzeichnis für die Datenbank existiert
mkdirSync(join(process.cwd(), "data"), { recursive: true });

// Database-Handler
const db = knex({
    client: "sqlite3",
    connection: { filename: dbFile },
    useNullAsDefault: true,
});

export default db;
