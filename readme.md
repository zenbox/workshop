# Willkommen zu SASS Einführung und Architektur
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

## Foliensatz
Es gibt einen Foliensatz zu unserem Seminar und Workshop im Verzeichnis `docs`: **SASS und CSS Architektur kompakt.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird. Eine vollständige Sass Dokumentation liefert die Webseite unter [sass-lang.com](https://sass-lang.com/) Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Dateien zum Download
wir werden im Laufe des Seminars HTML und CSS Dateien schreiben. Sie können während und am Ende des Seminars von https://github.com/zenbox/workshop heruntergeladen werden.

## Links zu SASS
- [sass-lang.com](https://sass-lang.com/)

## Links zu HTML und CSS
- [html5Test.com](http://html5test.com/index.html)
- [Can i Use?](https://caniuse.com/)
- [MIT License](https://opensource.org/licenses/MIT)
- [Cost of Defect](http://thklein.com/de_DE/cost-of-defect/)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

- [W3C](https://www.w3.org/TR/)
- [HTML Dokumentation I](https://www.w3schools.com/)
- [HTML Dokumentation II](https://wiki.selfhtml.org/)
- [HTML Dokumentation III](http://html5doctor.com/)
 

- [CSS Tricks](https://css-tricks.com/)
- [CSS Nomenklatur - Block Element Modifier](http://getbem.com/introduction/)
- [Scalable and Modular CSS](http://smacss.com/)
- [Stop Using IDs in CSS](https://medium.com/@zenbox/stop-using-ids-in-css-e79a860838c6)
- [Normalize CSS](https://necolas.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Material IO](https://material.io/)


## Code Snippets
### Live Sass Compiler Setting
```JSON
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
```

### CSS Doc Block
```JSON
{
  "CSS Doc Block and main comments": {
    "prefix": "docblock",
    "description": " structure for components",
    "body": [
      "/** $1",
      "  *",
      "  *  @desc $2",
      "  *        All devices fallback: @media screen {}",
      "  *        Small devices:        @media screen and (max-width:768px) {}",
      "  *",
      "  * ",
      "  *  @toc  i.e. COMPONENT",
      "  *        i.e. SUB COMPONENT",
      "  *",
      "  * @package Webapplication",
      "  * @module i.e. header",
      "  * @author Michael Reichart <michael@zenbox.de>",
      "  * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "  * @version 1.0.0",
      "  * @see i.e. inspired by ... {link to}",
      "  * @license MIT {https://opensource.org/licenses/MIT}",
      "  * @copyright (c) $CURRENT_YEAR Michael Reichart, Cologne",
      "  */",
      "",
      "/** COMPONENT BASE */",
      "",
      "/** COMPONENT LAYOUT */",
      "  ",
      "/** COMPONENT THEME */",
      "",
      "/** COMPONENT CHANGING STATES (BEHAVIOUR) */",
      "  ",
    ],
  },
}
  ```

  ### SCSS Doc Block
  ```JSON
  {
  "SCSS Doc Block and main comments": {
    "prefix": "docblock",
    "description": " Docblock Comment for SCSS Files",
    "body": [
      "///** $1",
      "// *",
      "// * @package Webapplication",
      "// * @module $2",
      "// * @author Michael Reichart <michael.reichart@gfu.net>",
      "// * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      "// * @version 1.0.0",
      "// * @see i.e. inspired by ... {link to}",
      "// * @license MIT {https://opensource.org/licenses/MIT}",
      "// * @copyright (c) $CURRENT_YEAR Michael Reichart, Cologne",
      "// */",
      "",
      "$3"
    ],
  },
}
  ```