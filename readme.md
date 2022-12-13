# Willkommen zu HTML, CSS, Javascript

## Michael Reichart

- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Inhalte und Zeiten

Die Kurstage gehen jeweils von

- 9:00 bis 16:00 Uhr.

Für das Remoteseminar sind folgende Pausenzeiten geplant:

- 10:30 bis 10:45 Uhr
- 12:00 bis 13:00 Uhr
- 14:30 bis 14:45 Uhr

## Präsenz während des Remote

Ein Remoteseminar funktioniert im Großen und Ganzen wie ein Präsenzseminar auch. Die Teilnahme mit einem Live-Videobild ist sehr wichtig. Das Video vermittelt Präsenz und stützt Fragen und Unterhaltungen.

Es ist anstrengend, einen ganzen Tag über Kamera und Bildschirm konzentriert zu arbeiten. Man kann keine Unterhaltungen führen wie gewohnt und viele kleine Gesten und Momente fehlen schlicht.

## Dateien zum Download

wir werden im Laufe des Seminars HTML und CSS Dateien schreiben. Sie können während und am Ende des Seminars von https://github.com/zenbox/workshop heruntergeladen werden.

# Lesezeichen

- https://caniuse.com
- https://html5test.com
- https://css-tricks.com
- https://meyerweb.com/eric/tools/css/reset/
- https://docs.emmet.io/cheat-sheet/
- https://necolas.github.io/normalize.css/8.0.1/normalize.css
- https://www.caniemail.com/

## Vscode settings

1. Sass Compiler installieren
2. settings einfügen

## Prettier vscode settings

1. prettier extension installieren
2. settings anpassen

```json
{
  // LIVE SERVER
  "liveServer.settings.port": 5500,
  "liveServer.settings.CustomBrowser": "chrome",

  // LIVE SASS COMPILER
  "liveSassCompile.settings.formats": [
    {
      "ext aensionName": ".css",
      "format": "expanded",
      "savePath": "/assets/css/"
    }
  ],
  "liveSassCompile.settings.generateMap": false,
  "liveSassCompile.settings.autoprefix": [],
  "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
  "liveSassCompile.settings.includeItems": [],

  // EDITOR
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.quickSuggestionsDelay": 1000,
  "editor.hover.delay": 250,

  "files.autoSave": "afterDelay"

  // "compile-hero.disable-compile-files-on-did-save-code": true
}
```
