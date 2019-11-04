/** Some functions
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

// function add(a) {
//     return a + a;
// }

function add(a, b) {
    var c;
    if (parseFloat(a) && parseFloat(b)) {
        c = a + b;
    } else {
        c = NaN;
    }
    return c;
}
console.clear();

var a = 1,
    b = 2,
    g = 4;

function add(a, b) {
    // ES5:  using a default operator for default values
    var _a = a || 0;
    var _b = b || 0;
    var _c = c || 0;

    if (typeof (_a) !== 'number') return NaN;
    if (typeof (_b) !== 'number') return NaN;
    if (typeof (_c) !== 'number') return NaN;

    return _a + _b + _c;
}

var x = add(a, b, c);

if (x) console.log(x);




// scopes:
// ES5: var (function scope)
// ES6: let (control scope)
// ES6: const (constants)

function fn() {
    let d = 42;

    for (let i = 0; i < 10; i++) {

    }

    console.log(i); // undefined!
    console.log(d);

    // attention: hoisting!
    let newVariable = 108;
}

fn();

console.log(d);
console.log(i);