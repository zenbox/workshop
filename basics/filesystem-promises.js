// Node.js bietet Befehle für den Dateizugriff: schreiben, lesen, beobachten.
import { readFile, writeFile, watch } from "node:fs/promises";

const FILE = "example.txt";
const DIR = "static";

// Beispiel: Datei schreiben, dann lesen (nacheinander, durch await)
await writeFile(FILE, "Hallo Welt!", "utf8");
console.log("Datei wurde geschrieben.");

const data = await readFile(FILE, "utf8");
console.log("Dateiinhalt:", data);

// Beispiel: Verzeichnis beobachten (30 Sekunden lang)
async function watchDir(dir, signal) {
    try {
        for await (const event of watch(dir, { signal })) {
            if (event.filename) {
                console.log(
                    `Datei ${event.filename} wurde geändert: ${event.eventType}`
                );
            }
        }
    } catch (err) {
        if (err.name !== "AbortError") throw err;
    }
}

const controller = new AbortController();
setTimeout(() => controller.abort(), 30_000);
await watchDir(DIR, controller.signal);
console.log("Beobachtung beendet.");
