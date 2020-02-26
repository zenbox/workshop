# Willkommen zu Web Technologien
## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt mehrere Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **Accessability for Web.pdf**, **CSS - kompakt.pdf**, **Javascript kompakt.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus viel Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Whiteboards
![Lorem ipsum dolor](static/assets/figures/2020-02-24&#32;10.39.31.jpg)
![Lorem ipsum dolor](static/assets/figures/2020-02-24&#32;14.19.30.jpg)
![Lorem ipsum dolor](static/assets/figures/2020-02-24&#32;15.03.55.jpg)


## Content Table
### Projektentwicklungsumgebung 
- :+1: Visual Studio Code, 
- :+1: nodejs, und Webpack. 
- :+1: Einrichten von Projekten, Konfigurationsmöglichkeiten,
- Buildprozess und clientseitiges Debugging,
- Kompilierung und Source Maps.

:+1: - Extensions: Beautify (HookyQR), Live Server und Live Sass (Ritwick Dey)

### Javascript
- Neuerungen in Javascript ES5 und ES6+
- :+1: 'use strict', getters/setters, JSON object 
- :+1: Funktionales Programmieren
- DOM Manipulation, Event Handling
- Kommunikation mit dem Server

### Generisches CSS
- :+1: LESS und/oder SASS im Workflow, 
- :+1: praktische Beispiele in SASS/SCSS. 
- :+1: Aufbau einer CSS Architektur.

### CSS Flexboxes und CSS Grids
- :+1: Bauen von Seitentemplates
- :+1: Bauen von Contentmodulen.

### HTML Accessability
- Umsetzung der WAI-ARIA mit Schwerpunkt auf Erfüllung der AA-Kriterien, die sich auf HTML und ARIA-Eigenschaften beziehen.
- Ggf. inhaltliche oder gestalterische Aufarbeitungen 

*Donnerstags*
### Real life
Gespräche und Austausch

## Links
### Links zu CSS
- https://meyerweb.com/eric/tools/css/reset/
- https://scotch.io/tutorials/a-look-at-bootstrap-4s-new-reset-rebootcss
- https://necolas.github.io/normalize.css/
- http://smacss.com/book/categorizing
- http://getbem.com/introduction/

### Links zu HTML
- https://github.com/scottjehl/picturefill
- https://github.com/scottjehl/Respond
- https://github.com/aFarkas/html5shiv

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

### SCSS Doc Block Comment Snippet
```json
{
	"SCSS Doc Block and main comments": {
		"prefix": "docblock",
		"description": " Docblock comment for SCSS files",
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
### CSS Doc Block Comment Snippet
```json
{
		"CSS Doc Block and main comments": {
			"prefix": "docblock",
			"description": "The docblock comment and the structure for components",
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
				"$3",
				"/** COMPONENT LAYOUT */",
				"  ",
				"/** COMPONENT THEME */",
				"",
				"/** COMPONENT CHANGING STATES (BEHAVIOUR) */",
				"",
				"",
				"/** SUB COMPONENT",
				"  * @desc type any description here ...",
				"  *       1. all devices fallback",
				"  *       2. small devices",
				"  */",
				"",
				"/** SUB COMPONENT BASE */",
				"/** SUB COMPONENT LAYOUT */",
				"/** SUB COMPONENT THEME */",
				"/** SUB COMPONENT CHANGING STATES */",
			],
		},
	}
```

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
			"   window.module = {} || window.module;",
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