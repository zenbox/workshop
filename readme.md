# Willkommen zu Material Design
## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

 ## Foliensatz
Es gibt mehrere begleitende Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **HTML kompakt.pdf**, **Cacading Stylesheets.pdf**. Was wir im Laufe des Seminars erarbeiten, kommt hinzu. Alle Ergebnisse stehen Ihnen anschließend unter der MIT Lizenz Verfügung.

## Dateien zum Download
wir werden im Laufe des Seminars HTML, CSS und Javascript Dateien schreiben. Meine Versionen davon können am Ende des Seminars hier heruntergeladen werden.

# Inhalt
## Einführung in das Material System
- Prinzipien, Komponenten, Themen
- Themes erstellen
  ##Vorstellung der Komponenten
- Hintergrundgestaltung
- Banner
- Cards
- Eingabefelder, Schaltflächen, Checkboxen, Radio buttons, Fortschrittsanzeigen, Schieberegler
- Chips
- Tabellen
- Datepicker
- Dialoge
- Bilder
- Listen und Menus
- Navigationen
- Sheets und Snackbars
- Switches
- Tabs
- Time pickers
- Tooltips
## Layouts planen und umsetzen
- Einführung in Spalten und Abstände
- Das responsive Grid und Anpassungen
- Breakpoints und Geräte
- UI Regions: Funktionale Bereiche im Layout
## Farben richtig einsetzen
- Ein Farbschema planen und anlegen
- Die primäre und sekundäre Farbe
- Typografie und Iconografie, Hintergrund und Kontrast
- Mit Farben kommunizieren - Zustände und Meldungen
- Barrierefreier Einsatz von Farben
## Typografie
- Das typografische System verstehen
- Anpassungen
- Sprachenunterstützung
## Sound
- Warum Sound wichtig ist: Einsatz und Wirkung
- Sound als Feedback
- Sound zur Gestaltung nutzen
## Icons und Shapes 
- Icons richtig einsetzen
- Shapes zur prägnanten Gestaltung nutzen
## Bewegung verstehen und einsetzen
- Geschwindigkeit
- Einfache und komplexe Bewegungen
- Transition Pattern
## Interaktion planen und gestalten
- Gesten verstehen
- Zeigen und Auswahl
- Zustände visualisieren


## Links zu Material Design
- [Material Design](https://material.io)
- [Webpack](https://webpack.js.org/)
- [Guide to Typography](https://material.io/develop/web/guides/typography)

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
- [CSS Architektur - skalierbar und modular](http://smacss.com/)
- [Stop Using IDs in CSS](https://medium.com/@zenbox/stop-using-ids-in-css-e79a860838c6)
- [Dropdown via CSS](https://css-tricks.com/solved-with-css-dropdown-menus/)
 

- [Blind-Bild-Generator](https://picsum.photos/)
- [Alle Web Spezifikationen beim W3C](https://www.w3.org/TR)
- [Generative Gestaltung](http://www.generative-gestaltung.de/)
- [The origin of responsive webdesign](https://alistapart.com/article/responsive-web-design/)
- [SASS for CSS](https://sass-lang.com/guide)


- [Popup Book for Beercamp](https://2012.beercamp.nclud.com/)
- [David Walsh: Spinning Cube](https://davidwalsh.name/css-cube)

## Code snippets

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