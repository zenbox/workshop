# Willkommen zum Seminar Bootstrap 4

*23./24. April 2020*<br>
michael.reichart@gfu.net<br>
Auf Xing und LinkedIn unter Michael Reichart

## Zeiten
9:00 bis 10:25 Uhr, 10:40 bis 12:00 Uhr<br>
13:00 bis 14:25 Uhr, 14:40 bis 16:00 Uhr

## Agenda
### Einstieg in Bootstrap 4
- Ressourcen und Download
- Quellen für Themes
- Browser-Kompatibilität
- Layout mit CSS Klassen
- Erweiterungen und Plugins
### Umgang mit dem Grid-System
- Gestaltungsprinzipien und 12er-Raster
- Zwischenräume
- Automatisches Layout
- Responsive Klassen
- Ausrichtung und Sortierung
- Verschachtelte Darstellungen
- Flexbox horizontal und vertikal
- Suchmaschinen optimierter HTML-Code
### Typografie
- Größen einstellen
- Farbschemata anwenden
- Abstände
- Textausrichtung
- Schatten und Rahmen
- Sichtbarkeit und Textersetzung
### Typische Inhalte verwenden
- Texte und Überschriften 
- Bilder und Medien-Elemente
- Formulare und Tabellen
- Icon Sets verwenden
### Navigationen erstellen
- Responsive Navbars 
- Menüpunkte als Dropdown
- Tabbed Navigation
### Komponenten verwenden
- Alerts, Badges und Buttons
- Listen
- Cards und Jumbotron
### Interaktive Komponenten
- Pagination
- Progress
- Scroll Spy
- Modal Boxen, Popup-Fenster
- Karussell, Slider
- Akkordeon
- Tool-Tipps
### Bootstrap und JavaScript
- jQuery und popper.js 
- Data Attribute, data-toggle
- :x: Events und asynchrone Funktionen
- Defaults überschreiben
- Methoden der Komponenten
### Theming
- :x: Überschreiben der CSS-Klassen
- :x: Eigenes Bootstrap-CSS erstellen mit Online-Tools

---

### Einführung
- :x: Übersicht über die Projektstruktur 
- npm Befehle einsetzen
- Einen eigenen Build erstellen
- Dateigrößen optimieren
- QUnit Test ausführen
### SCSS Einführung
- :x: Umwandlung von SCSS in CSS
- Verwendung von Variablen
- Verschachtelte Klassen
- Stile auslagern und importieren
- Mixins erstellen
- Erweitern und erben von Eigenschaften
- Operatoren anwenden
- @Rules und Direktiven
- Bedingte Stile
- Maps und Schleifen
### Bootstrap und SCSS
- Variablen für Farben und Grautöne
- Variablen für Media Queries
- Wichtige SCSS Funktionen
- Bootstrap Optionen ändern
### Anwendungsfälle
- Eigene Farben verwenden
- Default Variablen überschreiben
- Spaltenanzahl und Abstände im Grid ändern
- :x: Media Queries ändern
- Eigene Komponenten erstellen

### CSS
- Media Queries
- CSS Gewichtungen und Selektoren

# Installing
## Visual Studio Code Including Extensions 
1. [Download Visual Studio Code](https://code.visualstudio.com/download)
2. [Install Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. [Install Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
4. [Install Beautify Extension](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
5. [Install Better Comments Extension](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

### Live SASS Compiler Settings in VS Code
```


...
,
"liveSassCompile.settings.formats": [
    {
        "extensionName": ".css",
        "format": "expanded",
        "savePath": "/assets/css/"
    }
],
"liveSassCompile.settings.generateMap": false,
"liveSassCompile.settings.autoprefix": []
...
```

## Prepare a Project Folder
1. Create a project folder, i.e. "workshop"
2. Create a subfolder "assets"
3. Create index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theming Bootstrap 4</title>
</head>

<body>
    <h1>Theming Bootstrap 4</h1>
    <p>hello world</p>
</body>

</html>
```

## Install Bootstrap
1. Open a VS terminal and type ```npm init``` to create a new node project.

```
{
  "name": "bootstrap-theming",
  "version": "1.0.0",
  "description": "Basics of Bootstrap 4 Theming",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Michael",
  "license": "MIT"
}
```
2. Type ```npm install bootstrap --save```

You should get an nodes_modules subfolder. Inside you'll find a bootstrap folder.

```
workshop/
├── node_modules/
│   └── bootstrap
│       ├── dist
│       ├── js
│       └── scss
├── assets
│   ├── css
│   └── scss
│       └── main.scss
├── index.html
├── package-lock.json
└── package.json
```

Let's go ...


# Collection
- [HTML5 Test](http://html5test.com/)
- [Bootstrap](https://getbootstrap.com/)