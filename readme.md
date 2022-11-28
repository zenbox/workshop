# Willkommen zu Javascript mit Schwerpunkt nodejs

## Michael Reichart
- michael.reichart@gfu.net
- Auf LinkedIn unter Michael Reichart

## Zeiten
Die Kurstage gehen jeweils von 
- 9:00 bis 16:00 Uhr. 

Für das Seminar sind folgende Pausenzeiten geplant:
- 10:30 bis 10:45 Uhr
- 12:00 bis 13:00 Uhr
- 14:30 bis 14:45 Uhr
- 
## Inhalte
### JavaScript-Schulung mit Schwerpunkt auf NodeJS
- Sprachgrundlagen
- ES6+ Grundlagen, Sprachkern, Syntax und vieles mehr
- Variablen, Konstanten, Datentypen, Arrays, Objekte
- Kontrollstrukturen, Funktionen
- Klassen, Vererbung
 
### Nodejs Grundlagen
- Was ist NodeJS? Wozu wird es verwendet?
- NodeJS-Standardbibliothek und Open Source Module kennenlernen
- Node Package Manager (NPM) verstehen und anwenden
- Debugging, Konsole & Error Handling
- Code in mehreren Modulen (Dateien) verwalten
- ES Module Syntax (vs. Common JS Module)
- JSON anhand von Beispielen verstehen und anwenden
- EventEmitter verstehen und anwenden
 
### Sonstiges
- Kleine und mittelgroße Problemstellungen mit JavaScript lösen
- Einführung in die SOLID-Design-Prinzipien
- Asynchrones JavaScript, Promises und Callbacks verstehen und anwenden
- APIs ansteuern
- Moderne Fetch-API verwenden
- Test Driven Development (TDD)
- Einsatzzweck und die Vorteile von TDD verstehen
- Ziele, Werte und Prinzipien von TDD verstehen
- Unittest-Framework Jest verstehen und anwenden
 


## Code Snippets
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

### Socket.io Chat Styles
```css
        body {
            margin: 0;
            padding-bottom: 3rem;
            font-family: sans-serif;
        }

        #form {
            background: rgba(0, 0, 0, 0.15);
            padding: 0.25rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            height: 3rem;
            box-sizing: border-box;
            backdrop-filter: blur(10px);
        }

        #input {
            border: none;
            padding: 0 1rem;
            flex-grow: 1;
            border-radius: 2rem;
            margin: 0.25rem;
        }

        #input:focus {
            outline: none;
        }

        #form>button {
            background: #333;
            border: none;
            padding: 0 1rem;
            margin: 0.25rem;
            border-radius: 3px;
            outline: none;
            color: #fff;
        }

        #messages {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        #messages>li {
            padding: 0.5rem 1rem;
        }

        #messages>li:nth-child(odd) {
            background: #efefef;
        }
```