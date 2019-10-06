# Wilkommen beim Seminar HTML5, CSS, Javascript, jQuery - Wie baut man Weboberflächen?

## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt mehrere Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **HTML kompakt.pdf**, **CSS - kompakt.pdf**, **Javascript kompakt.pdf** und **jQuery Basics.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus viel Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Links zu CSS
- https://meyerweb.com/eric/tools/css/reset/
- https://scotch.io/tutorials/a-look-at-bootstrap-4s-new-reset-rebootcss
- https://necolas.github.io/normalize.css/

## Links zu HTML
- https://github.com/scottjehl/picturefill
- https://github.com/scottjehl/Respond
- https://github.com/aFarkas/html5shiv

## Links zu Javascript
- https://developer.mozilla.org/de/docs/Web/JavaScript/Reference
- https://kangax.github.io/compat-table/es6/
- https://tc39.es/ecma262/
- https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata
- https://eloquentjavascript.net/
- https://github.com/getify/You-Dont-Know-JS
- https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_promises
- https://stackoverflow.com/questions/15141118/are-javascript-functions-asynchronous

## Events
- https://hammerjs.github.io/
- https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches
- https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events

## Weiteres
- http://html5test.com/index.html
- https://caniuse.com/#search=addevent
- https://opensource.org/licenses/MIT
- http://thklein.com/de_DE/cost-of-defect/
- https://modernizr.com/

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
