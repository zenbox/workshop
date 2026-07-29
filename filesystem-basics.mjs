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

import { readFile, open, watch } from "node:fs/promises";
import { resolve } from "node:path";

// CSV Datei einlesen
async function readCSV(filePath) {
    const content = await readFile(resolve(filePath), "utf-8");

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

// Aufruf von async -> try-catch!!
try {
    await readCSV("./data.csv");
} catch (error) {
    console.error(error);
    console.warn("Datei nicht gefunden!");
}

// Log-Datei schreiben
async function writeLog() {
    const fileHandle = await open("log.txt", "a"); //a (append), x (extend), w (write)
    const line = `log entry ${new Date().toISOString()}\n`;

    fileHandle.write(line);
    fileHandle.close();

    console.log("Datei geschrieben, bzw angehängt.");
}

try {
    await writeLog();
} catch (error) {
    console.warn("hat nicht geklappt.");
}

// Änderungen beaobachten und etwas auslösen
// Websockets!
