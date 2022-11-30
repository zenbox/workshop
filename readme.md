# Willkommen zu Javascript mit Schwerpunkt nodejs

## Michael Reichart

-   michael.reichart@gfu.net
-   Auf LinkedIn unter Michael Reichart

## Zeiten

Die Kurstage gehen jeweils von

-   8:45 bis 15:45 Uhr.

Für das Seminar sind folgende Pausenzeiten geplant:

-   10:30 bis 10:45 Uhr
-   12:15 bis 13:00 Uhr
-   14:30 bis 14:45 Uhr
-

## Inhalte

### JavaScript-Schulung mit Schwerpunkt auf NodeJS

-   Sprachgrundlagen
-   ES6+ Grundlagen, Sprachkern, Syntax und vieles mehr
-   Variablen, Konstanten, Datentypen, Arrays, Objekte
-   Kontrollstrukturen, Funktionen
-   Klassen, Vererbung

### Nodejs Grundlagen

-   Was ist NodeJS? Wozu wird es verwendet?
-   NodeJS-Standardbibliothek und Open Source Module kennenlernen
-   Node Package Manager (NPM) verstehen und anwenden
-   Code in mehreren Modulen (Dateien) verwalten
-   ES Module Syntax (vs. Common JS Module)
-   JSON anhand von Beispielen verstehen und anwenden
-   EventEmitter verstehen und anwenden

### Sonstiges
-   Debugging, Konsole & Error Handling
-   Asynchrones JavaScript, Promises und Callbacks verstehen und anwenden
-   Moderne Fetch-API verwenden
-   Test Driven Development (TDD)
-   Einsatzzweck und die Vorteile von TDD verstehen
-   Ziele, Werte und Prinzipien von TDD verstehen
-   Unittest-Framework Jest verstehen und anwenden

-   Kleine und mittelgroße Problemstellungen mit JavaScript lösen
-   Einführung in die SOLID-Design-Prinzipien
-   APIs ansteuern

## Code Snippets

### .vscode/settings.json

```json
{
    // LIVE SERVER
    "liveServer.settings.port": 5500,
    "liveServer.settings.CustomBrowser": "chrome",

    // LIVE SASS COMPILER
    "liveSassCompile.settings.formats": [
        {
            "extensionName": ".css",
            "format": "expanded",
            "savePath": "/assets/css/"
        }
    ],
    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.autoprefix": [],
    "liveSassCompile.settings.excludeList": [
        "**/node_modules/**",
        ".vscode/**"
    ],
    "liveSassCompile.settings.includeItems": [],

    // EDITOR
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.quickSuggestionsDelay": 1000,
    "editor.hover.delay": 250,

    "files.autoSave": "afterDelay"
    
}
```

### .prettierrc

```json
{
    "proseWrap": "preserve",
    "semi": true,
    "singleQuote": false,
    "useTabs": false,
    "tabWidth": 4,
    "printWidth": 80,
    "quoteProps": "consistent",
    "jsxSingleQuote": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "htmlWhitespaceSensitivity": "css",
    "vueIndentScriptAndStyle": false,
    "endOfLine": "lf",
    "embeddedLanguageFormatting": "auto",
    "singleAttributePerLine": true
}
```

### nodejs/JS Snippets

```json
{
    "function documentation block": {
        "prefix": "function comment",
        "description": "print the function comment block",
        "body": [
            "/** $1",
            " *",
            " * @version v1.0.0",
            " * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
            " * @callback namepath",
            " * @param {type} desc",
            " * @returns {void}",
            " */",
            "$2"
        ]
    },
    "page documention block": {
        "prefix": "docblock",
        "description": "print the page doc block",
        "body": [
            "/** $1",
            "  *",
            "  *  @desc $2",
            "  *",
            "  * @package Webapplication",
            "  * @module $3",
            "  * @author Evvi <evvi@coding-samurai.org>",
            "  * @version v1.0.0",
            "  * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
            "  * @see i.e. inspired by ... {link to}",
            "  * @license MIT {https://opensource.org/licenses/MIT}",
            "  * @copyright (c) $CURRENT_YEAR Agila, Hannover",
            "  */",
            "$4"
        ]
    }
}
```
