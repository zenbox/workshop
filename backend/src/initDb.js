import db, { initializeDatabase } from "./models/db.js";

// Lernkontext 2.3: Einrichtung lässt vorhandene SQLite-Daten unangetastet.
try {
    await initializeDatabase();
    console.log(
        "SQLite-Schema bereit; vorhandene Datensätze wurden beibehalten."
    );
} catch (error) {
    console.error(error);
    process.exitCode = 1;
} finally {
    await db.destroy();
}
