# Welcome to ECMAScript 6+

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt einen Foliensatz zu unserem Seminar und Workshop im Verzeichnis `docs`: **ECMAScript 6+.pdf**. Dort ist alles enthalten, was innerhalb des Seminars erläutert wird.

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
