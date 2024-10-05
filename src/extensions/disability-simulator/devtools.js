chrome.devtools.panels.create(
    "Simulationen",
    null, // Optionales Icon
    "panel.html", // HTML-Datei, die das Panel definiert
    function (panel) {
        console.log("Simulationen Panel wurde erstellt");
    }
);
