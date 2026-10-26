/** Simple Filesystem Example
 *
 * @package MySoftware
 * @module basics
 * @author Michael Reichart <michael.reichart@gfu.net>
 * @version 1.0.0
 * @since 1.0.0 || 2026-07-29
 * @license MIT
 * @copyright ...
 */

import { readFile, open } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

// Lernkontext 1.2: Eine Datei asynchron lesen und den Fehler am Aufrufer behandeln.
async function readCSV(filePath) {
    const content = await readFile(filePath, "utf-8");

    // Text zerlegen und zurückgeben
    const [headerLine, ...rows] = content.trim().split("\n");
    const keys = headerLine.split(",");

    const data = rows.map((line) => {
        const values = line.split(",");
        return Object.fromEntries(
            keys.map((key, i) => [key.trim(), values[i]?.trim()])
        );
    });

    console.log("Keys:", keys);
    console.log("Data:", data);
    return data;
}

// Lernkontext 1.2: Datei-Handles werden auch bei Fehlern geschlossen.
async function writeLog() {
    const fileHandle = await open(join(projectRoot, "log.txt"), "a");
    try {
        await fileHandle.appendFile(`log entry ${new Date().toISOString()}\n`);
    } finally {
        await fileHandle.close();
    }
    console.log("Eine Logzeile wurde angehängt.");
}

try {
    await readCSV(join(projectRoot, "data.csv"));
    await writeLog();
} catch (error) {
    console.error("Dateiübung fehlgeschlagen:", error);
    process.exitCode = 1;
}
