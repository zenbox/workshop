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
    // DECLARATION
    // - - - - -
    var m = 42; // non declared variables to upper scope!

    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _add(a, b) {
        // ES5:  using a default operator for default values
        var _a = a || 0;
        var _b = b || 0;
        var _c = c || 0;

        if (typeof (_a) !== 'number') return NaN;
        if (typeof (_b) !== 'number') return NaN;
        if (typeof (_c) !== 'number') return NaN;

        return _a + _b + _c;
    }

    function main() {
        // publish the add function
        if (!window.Autark) window.Autark = {} || window.Autark;
        window.Autark.add = _add;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    main();

    // - - - - - - - - - -
}());

console.log(window.Autark.add(13, 27));