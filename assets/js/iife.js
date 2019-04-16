/**
 * IIFE Pattern - Immediate Invoked Function Expression
 * 
 * @description Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. 
 * Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
 *
 * @package ApplicationName
 * @author Michael <michael@zenbox.de>
 * @since 2019/04/15
 * @version 1.0.0
 * @copyright (c) 2019, Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
    'use strict';
    // - - - - - - - - - -
    var result = undefined;

    function doSomething(a, b) {
        var
            _a = a || 0,
            _b = b || 0;

        return _a + _b;
    }

    result = doSomething(13, 26);
    console.log(result);
    // - - - - - - - - - -
}())
