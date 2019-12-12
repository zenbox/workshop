# node js basics

## Das Socket Beispiel
Es gibt ein funktionierendes Socketbeispiel in ```socketio-chat```. 

Es verwendet dieselben Bibliotheken wie ```express-socket-server``` und ist gleich aufgabaut.
```express-socket-server``` läuft allerdings immer noch nicht, der Fehler ist mir unklar.

Wenn sich jemand die Mühe des suchens machen möchte und den Fehler gefunden hat, freue ich mich über eine kurze Info.


## SQL Dump via nodejs
```javascript
  db.query('CREATE DATABASE IF NOT EXISTS application;');
  db.query('USE application;');

  // Tabelle anlegen
  db.query('DROP TABLE IF EXISTS user;');

  sql = "CREATE TABLE user ( " +
    "userId INT(11) AUTO_INCREMENT, " +
    "username VARCHAR(50), " +
    "email VARCHAR(50), " +
    "password VARCHAR(50), " +
    "PRIMARY KEY (userId) );";
  db.query(sql);

  sql = "INSERT INTO user " +
    "(username, email, password) " +
    "VALUES " +
    "('Michael', 'michael@zenbox.de', 'geheim')," +
    "('Paula', 'paula@zenbox.de', 'geheim')," +
	"('Klaus', 'klaus@zenbox.de', 'geheim');";
```

## VS Code Snippets
```json
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
	}
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