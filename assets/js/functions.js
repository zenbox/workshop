/**
 * Javascript Basics - Functions
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
'use strict';

window.result = 0;
window._c = 1024;

function doSomething(a, b, c) {
    var // Single var declaration (D. Crockford)
        i,
        _a = a || 0, // default operator (D. Crockford)
        _b = b || 0;


    for (let i = 0; i < 2; i += 1) {
        _a *= _a;
    }

    console.log(i);

    return _a + _b;

}

result = doSomething(42, 66, 24);

console.log(result);
console.log(_c);