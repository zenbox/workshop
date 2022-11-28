// IIFE - Immediate Invoked Function Expression
// Scoped application modules (old style)
var A = (function () {
    "use strict";
    // - - - - - - - - - -
    let a = 42;
    function log() {
        console.log("hello");
    }
    return log;
    // - - - - - - - - - -
})();
A();
console.dir(window);

var f;

// "use strict"
console.log(f);
f = 15;
/** Javascript Basics
 *
 * @desc ...
 *
 * @package Webapplication
 * @module Basics
 * @author Michael <michael.reichart@gfu.net>
 * @author Paul <paul@gfu.net>
 * @version v1.0.0
 * @since 2022-11-28
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

// "use strict"

// Use of Better Comments as VS Code Extension:
// ! Single line comments
// ? Single line comments
// TODO Single line comments

var old = 2014;

// let is the new var
let a = 42;
let b = 3.141598;

console.log(typeof a);
console.log(typeof b);

let c = a + b;
console.log(typeof c);

console.log(parseFloat(b));
console.log(parseInt(b));

let s = "Lorem ipsum dolor sit";
console.log(typeof s);
console.log(s.length);

// Concatening of string
// !Don't
console.log(s + " more text");
var d = "42" + 7;

// ! Do
console.log(`sense of life ${d}`);

let bool1 = true; // 1
let bool2 = false; // 0

console.log(false === 0);
console.log(" 0 ".length);

// ! Don't
console.log(21702 == "21702");

// ! Do
console.log(21702 === "21702");

// console.clear();
let u = undefined;
let n = null;

// - - - - - - - - - -
// Scopes

let a_1 = 42;

function doSomething() {
    let a_2 = 108;

    // ! Don't
    f = "lalala";

    // ! Do
    // let f = "lalala"

    console.log(f);

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log(i)
}

doSomething();
// console.log(a_2);
console.log(f);

// - - - - - - - - - -
console.clear();

// Functions
// ! Do - default values in parameter list
function add(a = 42, b = undefined) {
    // ! Don't - obsolete default operator
    let _a = a || 42;

    return _a + b;
}

let result = add(3, 7);
console.log(result);

function addEventListener(a, b) {
    let event;
    event.type = a;
    event.time = new Date().getTime();
    if (event.type === "click") {
        // Callback execution!
        b(event);
    }
}

let button = document.querySelector("button");
// button.addEventListener("click", function (event) {
//     console.log("clicked!");
// });

// // Arrow functions
// () => {};
// let data = {}
// button.addEventListener("click", event => event.type );

// // Convenience arrow function notations
// arg1 => arg1 + arg2
//     (arg1, arg2) => { return arg1 + arg2 }

// Multi-value data types
let obj = {},
    arr = [];

obj = {
    key: `value`,
    number: 42,
    bool: true,
    obj: {},
    arr: [],
    fn: function () {},
};
console.log(obj.number);
console.log(obj["number"]);

arr = [true, 2, "three"];
console.log(arr[0]);
