/** Module-Block Pattern
 *
 *  @desc Scoped programming with an 
 *        Immediate Invoked Function Expression
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019/11/04   
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // - - - - -
    // DECLARATION Wenn ich also hier nun start mit dem Schreiben, dann geht was in der Aufnahme
    // - - - - -
    var _m = 42; // non declared variables to upper scope!

    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _add(a, b, c) {
        var _a = a || 0;
        var _b = b || 0;
        var _c = c || 0;

        if (typeof (_a) !== 'number') return NaN;
        if (typeof (_b) !== 'number') return NaN;
        if (typeof (_c) !== 'number') return NaN;

        return _a + _b + _c;
    }

    function _main() {
        // publish a module
        window.newModule = {} || window.newModule;
        // publish functions
        window.newModule.add = _add;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    _main();


    // - - - - - - - - - -
}());

// windows controls the main 
window.onload = function () {
    console.log(window.newModule.add(5, 5)); // if i write here ...
}