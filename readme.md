# node js Grundlagen

**Herzlich willkommen zu den nodejs Grundlagen.**

Mein Name ist Michael Reichart, wir erarbeiten in den nächsten zwei Tage die Grundlagen für den Umgang mit nodejs.
Sie können mich unter michael.reichart@gfu.net per Email erreichen.
## Seminarzeiten
- 9:00 bis 16:0 Uhr
- Mittagspause von 12:00 Uhr bis 13:00 Uhr
- kleine Pausen etwa gegen 10:30 Uhr und gegen 14:30 Uhr.

## Die Inhalte
### Einführung in node.js
- Über den Autor Ryan Dahl und die Javascript Engine V8 
- Installation und Konfiguration
- Non blocking I/O, Event Loops, Single Threads  
- Beispiel 'Hallo Welt' und andere
### Beispielimplementierungen
- Implementierung eines http-Servers
- Implementierung eines TCP-Servers
- Ggf. weitere Implementierungen
### Events registrieren und verarbeiten
- Serverseitige Events
- Einrichten der Listener
- Aufbau einer Control zur Steuerung
### Module verwenden
- npm - der node Package Manager
- Einbindung integrierter und externer Module
- Übersicht über gängige Module
- Protokollunterstützung für UDP, DNS, HTTP, HTTPS und TCP
- Zugriff auf das lokale System 
- Datenfluß, Kommunkation
- Arbeiten mit der CommonJS Library
### Debugging
- Debugger, Haltepunkte, Überwachung
- Grundlagen des Testing 
### Praxisworkshop - Anwendungen
- Echtzeit mit socket.io
- Datenbankanbindung mit mySQL
- Übersicht über weitere Datenbankanbindungen
- Weitere Anwendungsbeispiele aus der Praxis











## SQL Dump via nodejs
```javascript
   let
    db = mysql.createConnection(mysqlConfig),
    sql = null;

  db.on('error', function (error) {
    console.log(error);
  });

  db.query('CREATE DATABASE IF NOT EXISTS animals;');
  db.query('USE animals;');

  // Tabelle anlegen
  db.query('DROP TABLE IF EXISTS sheeps;');

  sql = "CREATE TABLE sheeps ( " +
    "id INT(11) AUTO_INCREMENT, " +
    "sheep VARCHAR(50), " +
    "PRIMARY KEY (id) );";
  db.query(sql);

  sql = "INSERT INTO sheeps " +
    "(sheep) " +
    "VALUES " +
    "('Merinoschaf')," +
    "('Fleischschaf')," +
    "('Haarschaf');";

  db.query(sql, function () {
    console.log('Datensätze geschrieben.');
  });

  db.end();
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

```html
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font: 13px Helvetica, Arial;
        }

        form {
            background: #000;
            padding: 3px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        form input {
            border: 0;
            padding: 10px;
            width: 90%;
            margin-right: .5%;
        }

        form button {
            width: 9%;
            background: rgb(130, 224, 255);
            border: none;
            padding: 10px;
        }

        #messages {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        #messages li {
            padding: 5px 10px;
        }

        #messages li:nth-child(odd) {
            background: #eee;
        }

        #messages {
            margin-bottom: 40px
        }
    </style>
```