// test.js
import sheepModel from "./sheepModel.js";

// Init + alle Operationen nacheinander
async function run() {
    // 1. Tabelle anlegen & Seed-Daten einfügen
    await sheepModel.init();
    console.log("DB initialisiert");

    // 2. Alle Schafe auflisten
    const all = await sheepModel.list();
    console.log("\nAlle Schafe:", all);

    // 3. Ein Schaf laden
    const one = await sheepModel.load(1);
    console.log("\nSchaf #1:", one);

    // 4. Neues Schaf anlegen
    const created = await sheepModel.create({ name: "Baa" });
    console.log("\nAngelegt:", created);

    // 5. Schaf umbenennen
    const updated = await sheepModel.update(created.id, { name: "Baa Jr." });
    console.log("\nAktualisiert:", updated);

    // 6. Schaf löschen
    await sheepModel.delete(created.id);
    console.log(`\nSchaf #${created.id} gelöscht`);

    // 7. Finale Liste
    const final = await sheepModel.list();
    console.log("\nFinale Liste:", final);
}

run().catch(console.error);
