/** Sheep Datenmodell
 *
 * @package Database
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-11-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import db from "./db.js";

const TABLE = "sheeps";

async function initSheepModel() {
    const exists = await db.schema.hasTable(TABLE);

    if (!exists) {
        await db.schema.createTable(TABLE, (table) => {
            table.increments("id").primary();
            table.string("name").notNullable();
        });

        await db(TABLE).insert([
            { name: "Dolly" },
            { name: "Shaun" },
            { name: "Wooly" },
        ]);
    }
}

async function listSheeps() {
    let sheeps = await db(TABLE).select("*").orderBy("name", "asc");
    return sheeps;
}

// ! Neues Schaf anlegen!
async function createSheep(data) {
    const [id] = await db(TABLE).insert(data);
    let newSheep = await loadSheep(id);
    return newSheep;
}

async function loadSheep(id) {
    let sheep = await db(TABLE).where({ id }).first();
    return sheep;
}

// ! export mit createSheep ergänzen!
export { initSheepModel, listSheeps, loadSheep, createSheep };
