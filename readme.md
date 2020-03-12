# Willkommen zu Javascript für Fortgeschrittene
## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt mehrere Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **HTML kompakt.pdf**, **CSS - kompakt.pdf**, **Javascript kompakt.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus viel Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Content Table
### JavaScript Roundup -  Der richtige Start
- :white_check_mark: Datentypen und Operatoren
- :white_check_mark: Scoping und Context
- :white_check_mark: Hoisting vermeiden
- Closures erkennen
- :white_check_mark: Code Kapselung mit IIFE
- Funktionsweise der JS-Interpreter
### Besseren JavaScript-Code entwerfen
- Debugging im Browser (Chrome Developer Tools, Mozilla Developer Tools)
- Konventionen einhalten mit JSLint und ESLint
- :white_check_mark: Dokumentieren mit JSDoc
- Einführung in Unit Tests
- Automatisieren von Aufgaben
### Objekt Orientiertes JavaScript (OOJS)
- Factory Pattern
- :white_check_mark: Constructor Pattern
- :white_check_mark: Methoden hinzufügen mit dem Protoype Pattern
- Method-Chaining
- Vererbung durch Combination Inheritance
### ECMAScript 5 - neue Möglichkeiten
- Erstellen von Objekten mit Object.create()
- Absichern von Objekten und Properties
- Neue Array-Methoden
### ES 6/7 bzw. ECMAScript 2015/2016
- :white_check_mark: Sichtbarkeit von Variablen in ES6
- Arrow-Function
- :white_check_mark: Class-Begriff
- Import und Export und die Umsetzung für ältere Browser
### Asynchrones JavaScript
- Promises
- Observables mit ReactiveX
### Moderne Architektur für JavaScript Applikationen
- Modul erstellen 
- Singleton richtig erstellen
- Observer-Pattern verstehen
### Modulare JavaScript Patterns
- Projekt-Initialisierung mit npm und Yarn
- Cross-Browser-Applikationen mit Polyfills
- Modernes JavaScript in älteren Browsern mit Babel und TypeScript
- Packaging und Deployment mit npm, Grunt und Webpack

## Links

### Links zu HTML
- https://github.com/scottjehl/picturefill
- https://github.com/scottjehl/Respond
- https://github.com/aFarkas/html5shiv
  
### Links zu CSS
- https://meyerweb.com/eric/tools/css/reset/
- https://scotch.io/tutorials/a-look-at-bootstrap-4s-new-reset-rebootcss
- https://necolas.github.io/normalize.css/
- http://smacss.com/book/categorizing
- http://getbem.com/introduction/

### Links zu Javascript
- https://developer.mozilla.org/de/docs/Web/JavaScript/Reference
- https://kangax.github.io/compat-table/es6/
- https://tc39.es/ecma262/
- https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata
- https://eloquentjavascript.net/
- https://github.com/getify/You-Dont-Know-JS
- https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_promises
- https://stackoverflow.com/questions/15141118/are-javascript-functions-asynchronous

### Events
- https://hammerjs.github.io/
- https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
- https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events

### Weiteres
- http://html5test.com/index.html
- https://caniuse.com/#search=addevent
- https://opensource.org/licenses/MIT
- http://thklein.com/de_DE/cost-of-defect/
- https://modernizr.com/
- https://docs.emmet.io/cheat-sheet/

## Visual Studio Code Snippets
### Javascript Snippets

- The Function Comment
- The JS Docblock Comment
- The IIFE Pattern
- The Module Block Pattern
  
```json
{
	"function documentation block": {
		"prefix": "function comment",
		"description": "A comment block for functions",
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
		"description": "The docblock comment for Javascript",
		"body": [
			"/** $1",
			"  *",
			"  *  @desc $2",
			"  *",
			"  * @package Webapplication",
			"  * @module $3",
			"  * @author Michael <michael.reichart@gfu.net>",
			"  * @version v1.0.0",
			"  * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
			"  * @see i.e. inspired by ... {link to}",
			"  * @license MIT {https://opensource.org/licenses/MIT}",
			"  * @copyright (c) $CURRENT_YEAR Michael Reichart, Cologne",
			"  */",
			"$4"
		]
	},
	"IIFE Pattern": {
        "prefix": "iife",
        "description": "Immediate invoked function expression",
		"body": [
			"!(function () {",
			"'use strict';",
			"//- - - - - - - - - -",
			"$1",
			"//- - - - - - - - - -",
			"}());"
		]
	},
	"Module Block Pattern": {
        "prefix": "module block pattern",
        "description": "Immediate invoked function expression with publishing in window",
		"body": [
			"!(function () {",
			"'use strict';",
			"// - - - - - - - - - -",
			"// DECLARATION",
			"// - - - - -",
			"$1",
			"",
			"// - - - - -",
			"// FUNCTIONS",
			"// - - - - -",
			"function _double(a) {",
			"   var _a = a || 0;",
			"",
			"   if (typeof (_a) !== 'number') return NaN;",
			"",
			"   return _a + _a;",
			"};",
			"",
			"function _main() {",
			"   // publish module and a function",
			"   window.module = window.module || {};",
			"   window.module.double = _double;",
			"}",
			"",
			"// - - - - -",
			"// CONTROL",
			"// - - - - -",
			"_main();",
			"// - - - - - - - - - -",
			"}())"
		]
    }
}
```