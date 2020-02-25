/** Some Basic JS Pattern
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-02-25
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */

window.f = undefined;

// IIFE - Immediate Invoked Function Expression
!(function () {
    'use strict';
    //- - - - - - - - - -

    // Declarations
    var a = 42,
        b = 108,
        c,
        e;

     f = 108; // error!
    
    // ES6+
    for (let i = 0; i < 10; i += 1) {}

    console.log(i); // undefined

    // Functions
    function log(m) {
        console.log(m);
    }

    // Event Control
    document
        .querySelector('button#log')
        .addEventListener('click', function (event) {
            log('hello world');
        });

    //- - - - - - - - - -
}());

console.log(a); // undefined

// Module Block Pattern
!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -


    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _double(a) {
        var _a = a || 0;

        if (typeof (_a) !== 'number') return NaN;

        return _a + _a;
    };

    function _main() {
        // publish module and a function
        window.module = window.module || {};
        window.module.double = _double;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    _main();
    // - - - - - - - - - -
}())