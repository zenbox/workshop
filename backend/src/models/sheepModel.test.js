import assert from "node:assert/strict";
import { after, test } from "node:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const directory = await mkdtemp(join(tmpdir(), "weidebuch-model-test-"));
process.env.DATABASE_FILE = join(directory, "legacy.sqlite");
const { default: db, initializeDatabase } = await import("./db.js");
const { default: authModel } = await import("./authModel.js");
const { default: sheepModel } = await import("./sheepModel.js");

await db.schema.createTable("sheeps", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
});
await db("sheeps").insert({ name: "Legacy Dolly" });
await initializeDatabase();

after(async () => {
    await db.destroy();
    await rm(directory, { recursive: true, force: true });
});

test("additive Migration erhält Altzeilen und trennt Herden nach Nutzer", async () => {
    const legacy = await db("sheeps").where({ name: "Legacy Dolly" }).first();
    assert.equal(legacy.name, "Legacy Dolly");
    assert.equal(legacy.user_id, null);
    assert.equal(legacy.breed, "Ouessant");

    const firstUser = await authModel.createUser(
        "first@example.test",
        "correct horse battery staple"
    );
    const secondUser = await authModel.createUser(
        "second@example.test",
        "correct horse battery staple"
    );
    const sheep = await sheepModel.create(firstUser.id, {
        name: "Flocke",
        breed: "Merino",
        age: 2,
        sex: "Weiblich",
    });

    assert.equal((await sheepModel.list(firstUser.id)).length, 1);
    assert.deepEqual(await sheepModel.list(secondUser.id), []);
    assert.equal(await sheepModel.find(secondUser.id, sheep.id), undefined);

    const longName = await sheepModel.create(firstUser.id, {
        name: "N".repeat(40),
        breed: "Merino",
        age: 2,
        sex: "Weiblich",
    });
    const longCopy = await sheepModel.duplicate(firstUser.id, longName.id);
    assert.equal(longCopy.name.length, 40);
});
