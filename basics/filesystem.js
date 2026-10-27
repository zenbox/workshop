// Node.js besitzt Befehle für den Dateizugruff
// Schreiben, Lesen und Beobachten.

import fs from "node:fs";

// Beispiel: Datei schreiben
fs.writeFile("example.txt", "Hallo Welt!", (err) => {
    if (err) throw err;
    console.log("Datei wurde geschrieben.");
});

// Beispiel: Datei lesen
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Dateiinhalt:", data);
});

// Beispiel: Datei beobachten
fs.watch("example.txt", (eventType, filename) => {
    if (filename) {
        console.log(`Datei ${filename} wurde geändert: ${eventType}`);
    }
});

// Ein Verzeicnis beobachten
fs.watch("static", (eventType, filename) => {
    if (filename) {
        console.log(`Verzeichnis ${filename} wurde geändert: ${eventType}`);
    }
});