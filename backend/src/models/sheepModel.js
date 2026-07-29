/** Sheep Datenmodell (Klassen-Version)
 *
 * @package Database
 * @module
 * @author Michael <michael.reichart@gfu.net>
 * @version v2.0.0
 * @since 2025-11-13
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import db from "./db.js";

class SheepModel {
    #table = "sheeps"; // für mich neu?!
    // bisher _table als Syntax für "private" Variablen

    /**
     * @constructor
     */
    constructor() {}

    async init() {
        const exists = await db.schema.hasTable(this.#table);

        if (!exists) {
            await db.schema.createTable(this.#table, (table) => {
                table.increments("id").primary();
                table.string("name").notNullable();
            });

            await db(this.#table).insert([
                { name: "Dolly" },
                { name: "Shaun" },
                { name: "Wooly" },
            ]);
        }

        return this; // Ermöglicht Method Chaining
    }

    /**
     *
     * @returns rows <array>
     */
    async list() {
        return await db(this.#table).select("*").orderBy("name", "asc");
    }

    /**
     *
     * @param {*} id
     * @returns row
     */
    async load(id) {
        return await db(this.#table).where({ id }).first();
    }

    /**
     * @param {*} data
     * @returns id
     */
    async create(data) {
        const [id] = await db(this.#table).insert(data);
        return await this.load(id);
    }
    1;
    /**
     *
     * @param {*} id
     * @param {*} data
     * @returns id
     */
    async update(id, data) {
        await db(this.#table).where({ id }).update(data);
        return await this.load(id);
    }

    /**
     *
     * @param {*} id
     *
     * TODO: Testfähigkeit herstellen, Rückgabe fehlt!
     */
    async delete(id) {
        await db(this.#table).where({ id }).del();
    }
}

// Singleton-Pattern: Export als    e i n e   Instanz für die ganze App.
const sheep = new SheepModel();
export default sheep;

/*
// Einzelne Schaf-Instanzenklasse
class Sheep { 
    constructor(id, name) { }
    
    get id() {
        return this.#id;
    }

    set name(name) {
        this.#name = name;
    }
}

export default Sheep;
*/
