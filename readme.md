# Willkommen zu Javascript

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt zwei Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **Javascript kompakt.pdf**, **Javascript Modules, Constructors, Pattern.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Allgemeine Links
- Welcher Browser unterstützt was? - http://html5test.com/
- Welcher Browser unterstützt was? - https://caniuse.com/
- ES 6 Browserunterstützung - https://kangax.github.io/compat-table/es6/
- Kompatibilität - https://modernizr.com/

## Javascript Links
- ECMA - https://tc39.es/ecma262/
- JS by Mozilla - https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/
- JS Reference by Mozilla - https://developer.mozilla.org/de/docs/Web/JavaScript/Reference
- Eloquent JS - https://eloquentjavascript.net/
- You dont know JS - https://github.com/getify/You-Dont-Know-JS
- The JavaScript this Keyword - https://www.youtube.com/watch?v=gvicrj31JOM
- Touch Events -  https://hammerjs.github.io/
- Touch Events - https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
- Formular versenden - https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata
- Async or sync functions - https://stackoverflow.com/questions/15141118/are-javascript-functions-asynchronous


## Other
- https://opensource.org/licenses/MIT
- http://thklein.com/de_DE/cost-of-defect/
- Gary Bernhardt, WAT - https://www.destroyallsoftware.com/talks/wat
- JSON Data by Chuck Norris - http://www.icndb.com/


# Code Snippets (Visual Studio Code)

```javascript
{
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
		"body": [
			"!(function () {",
			"'use strict';",

			"$1",
			"})()"
		],
		"description": "Immediate invoked function expression"
	}
}
```