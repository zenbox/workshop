# Willkommen zu  den nodejs Grundlagen für Webservices

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Zeiten
Die Kurstage gehen jeweils von 
- 9:00 bis 16:00 Uhr. 

Für das Seminar sind folgende Pausenzeiten geplant:
- 10:30 bis 10:45 Uhr
- 12:00 bis 13:00 Uhr
- 14:30 bis 14:45 Uhr
- 
## Inhalte
- Einführung in nodejs
- Aufbau einer Entwicklungsumgebung
- Debugger, Nodemon, Packages, Versionierung 
- Common Modules, ES-Modules
- Hello World, Filesystem
- Webservice, Websocket
- Classes, Promises
- Aufbau einer Middleware-Architektur mit
- Express
  - Router
  - Controller
- ReST API (Schnittstellen-Standard)
- Mongo DB (Dokumentenbasierte Datenbank)
- XMLHttpRequest (ggf. AXIOS)
- Best Practices


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