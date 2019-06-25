# Welcome to Javascript

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt einen Foliensatz zu unserem Seminar und Workshop im Verzeichnis `docs`: **Javascript kompakt.pdf**. Dort finden Sie zum Nachlesen, was im des Seminars erläutert wird. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Links
- https://opensource.org/licenses/MIT
- https://developer.mozilla.org/de/docs/Web/JavaScript/Reference
- https://kangax.github.io/compat-table/es6/
- https://hammerjs.github.io/
- https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
- https://tc39.es/ecma262/
- https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events
- https://caniuse.com/#search=addevent

# Code Snippets
Code Snippets die in Atom in die Snippetsdammlung kopiert werden können.

```CoffeeScript
# - - - - - - - - - -
# JAVASCRIPT SNIPPETS
# - - - - - - - - - -
'.source.js':
  'docblock':
    'prefix': 'docblock'
    'body': """
            /* global console, window, document */
            /**
             * $1
             *
             * @package Webapplication
             * @author Michael [michael@zenbox.de]
             * @since $2
             * @version v1.0.0
             * @copyright (c) 2019 Michael Reichart, Cologne
             * @license MIT License [https://opensource.org/licenses/MIT]
             */

            $3
            """

  'methodblock':
    'prefix': 'methodblock'
    'body': """
            /**
             * $1
             *
             * @param $2
             * @return $3
             */
            $4
            """

  'iife':
    'prefix': 'iife'
    'body':"""
                 !(function() {
                     'use strict';
                     // - - - - - - - - - -
                     // DECLARATION
                     let init = undefined;

                     // METHODS
                     init = function () {};

                     // CONTROL
                     window.addEventListener('load', init);
                     // - - - - - - - - - -
                 }());
           """
```
