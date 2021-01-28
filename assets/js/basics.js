/** Some Javascript Basics
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-01-27
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Variables 
// ES5
var myVariable = true;

// ES6:
let myVariableName = true;
const PI = 3.1415;

// ES5
var MyPrototypeObject = function () {};
var myInstanceFromProto = new MyPrototypeObject();

// ES6
class MyClassName {};
let myInstanceFromClass = new MyClassName();

// Scopes
(function () {
    var i = null;

    let a = 42; // let ist das neue var
    console.log(a);

    // ES5 - function scopes only
    for (i = 0; i < 10; i += 1) {
        // console.log(i);
    }

    // ES6: control scopes!
    for (let j = 0; j < 10; j += 1) {
        // console.log(j);
    }

    // console.log(i);
    // console.log(j);
}());

// console.log(a);

// Types
// Primitive value types
let a = "string",
    b = 42.234,
    c = true;

console.log(typeof a, typeof b, typeof c)

console.log((0.1 + 0.2));
console.log((1 + 2.2));

console.log(parseInt(b));
console.log(parseFloat(b));

b = "was neues";
console.log(typeof b);

// comparing values (only)
console.log(true == true);
console.log(1 == true);
console.log("1" == true);

// comparing types and values ===, !==
console.log(true === true);
console.log(1 === true);
console.log("1" === true);


// multiple/complex value types
let fn = function () {};
let arr = [true, "two", 3];
let obj = {
    key_1: "value",
    key_2: true,
    key_3: 3,
    obj: {
        Key: "value"
    },
    arr: [1, 2, 3],
    fn: function () {},
    n: null,
    u: undefined
};

// functions
let myFn = function (a, b) {
    console.log(a + b)
};
myFn(2, 3);

function log() {
    console.log('logged!')
};
log();

let d = 108;

// immediate invoked function
(function (e) {
    let window = null;
    console.log(e);
}(d))




// let window = (function () {
//     let o = {};
//     return o;
// }())