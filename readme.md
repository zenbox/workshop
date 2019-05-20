# code snippets

```CoffeeScript
# - - - - - - - - - -
# MODULE BLOCK FOR NODEJS
# - - - - - - - - - -
# - - - - - - - - - -
# JAVASCRIPT SNIPPETS
# - - - - - - - - - -
'.source.js':
  'node-pattern':
    'prefix': 'node block'
    'body': """
            /* global console, require */
            /**
            * $1
            *
            * @package Webapplication
            * @author Michael [michael@zenbox.de]
            * @since $2
            * @version v1.0.0
            * @copyright (c) 2018 Michael Reichart, Cologne
            * @license MIT License [https://opensource.org/licenses/MIT]
            */

            'use strict';
            // - - - - - - - - - -
            const http = require('http');
            let $3;

            // - - - - - - - - - -

            """
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
             * @copyright (c) 2018 Michael Reichart, Cologne
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
