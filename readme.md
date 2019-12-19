# D3 Datavisualization

## Links
- https://caniuse.com/#search=box-sizing
- http://html5test.com/results/desktop.html
- https://www.w3schools.com/graphics/svg_reference.asp
- http://bl.ocks.org/alansmithy/e984477a741bc56db5a5
- https://neo4j.com/resources/
- https://shiny.rstudio.com/articles/html-ui.html

## Code Snippets

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
			"//- - - - - - - - - -",
			"$1",
			"//- - - - - - - - - -",
			"}());"
		],
		"description": "Immediate invoked function expression"
	},
	"Module Block Pattern": {
		"prefix": "module block pattern",
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
		],
		"description": "Immediate invoked function expression"
	},
	"Comments": {
		"prefix": "comment",
		"body": [
			"// - - - - - - - - - -",
			"title = '$1';",
			"// - - - - - - - - - -",
			"$2"
		],
		"description": "Three simple comment lines"
	},
	"Comments and object literal": {
		"prefix": "segment",
		"body": [
			"// - - - - - - - - - -",
			"title = '$1';",
			"// - - - - - - - - - -",
			"{",
			"$2",
			"}",
		],
		"description": "A object literal segment with title"
	}
}
```