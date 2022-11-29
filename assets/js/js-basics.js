// HOISTING
// The JS interpreter hoists any `var`-declarations
// or any forgotten declaration to the surrounding function.
// This results in an implizit global variable, since the
// surrounding function is the global `window`
// ! Dont use implizit global variables
var f;

// STRICT INTERPRETER
// To avoid undeclared variables, tighten the interpreter
// ! Do in browser
("use strict");

console.log(f);
f = 15;
// - - - - - - - - - -

// ! Do use docblock-comments
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

// Use of Better Comments as VS Code Extension:
// ! Single line comments
// ? Single line comments
// TODO Single line comments

// - - - - - - - - - -
// DECLARATION
// ! Don't
// using `var` as a declaration is out of date
// due to its `function-scoped`-only behaviour
var old = 2014;

// ! Do
// `let` is the new var
let modern = 2015;

// - - - - - - - - -
// PRIMITIVE VALUE TYPES
// - - - - - - - - -
// NUMBER
// due to its `control-scoped` behaviour
// Numbers are 64-bit floats (8 byte)
let a = 42; // implizit integer
let b = 3.141592;

// console.log(typeof a);
// console.log(typeof b);

// Operations converts implizit number types to float
let c = a + b;
console.log(typeof c); // number

// Force a floating value
parseFloat(b); // 3.141592;
// Force an integer value
parseInt(b); // 3

/*  Implizit number values:
    Numbers are returned as-is.
    `undefined` turns into NaN.
    `null` turns into 0.
    `true` turns into 1; `false` turns into 0.
*/

/* Number static methods and number methods
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

    Number.EPSILON
    The smallest interval between two representable numbers.

    Number.MAX_SAFE_INTEGER
    The maximum safe integer in JavaScript (253 - 1).

    Number.MAX_VALUE
    The largest positive representable number.

    Number.MIN_SAFE_INTEGER
    The minimum safe integer in JavaScript (-(253 - 1)).

    Number.MIN_VALUE
    The smallest positive representable number—that is, the positive number closest to zero (without actually being zero).

    Number.NEGATIVE_INFINITY
    Special value representing negative infinity. Returned on overflow.

    Number.POSITIVE_INFINITY
    Special value representing infinity. Returned on overflow.

    Number.isNaN()
    Determine whether the passed value is NaN.

    Number.isFinite()
    Determine whether the passed value is a finite number.

    Number.isInteger()
    Determine whether the passed value is an integer.

    Number.isSafeInteger()
    Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).
*/

// Number methods
let n = 3.141592;
n.toFixed(2); //       3.14
n.toPrecision(4); //   3.142
n.toExponential(); //  3.141592e+0
n.toString(); //       "3.142"
"42".valueOf(); //     42
n.toLocaleString(); // 3,142

// - - - - - - - - - -
// STRING
let s = "Lorem ipsum dolor sit";
console.log(typeof s);
s.length; // 21

// Concatening of string
// !Don't
s + " more text"; // "Lorem ipsum dolor sit more text"
var d = "42" + 7; // 427

// ! Do
`sense of life is ${d}`; // "sense of life is 427"

// For multiline notation use `/`
const longString =
    "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

/*  Implizit string values:
    Strings are returned as-is.
    `undefined` turns into "undefined".
    `null` turns into "null".
    `true` turns into "true"; `false` turns into "false".
    Numbers are converted with the same algorithm as toString(10).
*/

/*  String static methods and string methods:
    @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

    String.fromCharCode()
    Returns a string created by using the specified sequence of Unicode values.

    String.fromCodePoint()
    Returns a string created by using the specified sequence of code points.

    String.raw()
    Returns a string created from a raw template string.

    Instance properties
    String.prototype.length
    Reflects the length of the string. Read-only.

    Instance methods
    String.prototype.at()
    Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.

    String.prototype.charAt()
    Returns the character (exactly one UTF-16 code unit) at the specified index.

    String.prototype.charCodeAt()
    Returns a number that is the UTF-16 code unit value at the given index.

    String.prototype.codePointAt()
    Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.

    String.prototype.concat()
    Combines the text of two (or more) strings and returns a new string.

    String.prototype.includes()
    Determines whether the calling string contains searchString.

    String.prototype.endsWith()
    Determines whether a string ends with the characters of the string searchString.

    String.prototype.indexOf()
    Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

    String.prototype.lastIndexOf()
    Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

    String.prototype.localeCompare()
    Returns a number indicating whether the reference string compareString comes before, after, or is equivalent to the given string in sort order.

    String.prototype.match()
    Used to match regular expression regexp against a string.

    String.prototype.matchAll()
    Returns an iterator of all regexp's matches.

    String.prototype.normalize()
    Returns the Unicode Normalization Form of the calling string value.

    String.prototype.padEnd()
    Pads the current string from the end with a given string and returns a new string of the length targetLength.

    String.prototype.padStart()
    Pads the current string from the start with a given string and returns a new string of the length targetLength.

    String.prototype.repeat()
    Returns a string consisting of the elements of the object repeated count times.

    String.prototype.replace()
    Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

    String.prototype.replaceAll()
    Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression, and replaceWith may be a string or function.

    String.prototype.search()
    Search for a match between a regular expression regexp and the calling string.

    String.prototype.slice()
    Extracts a section of a string and returns a new string.

    String.prototype.split()
    Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.

    String.prototype.startsWith()
    Determines whether the calling string begins with the characters of string searchString.

    String.prototype.substring()
    Returns a new string containing characters of the calling string from (or between) the specified index (or indices).

    String.prototype.toLocaleLowerCase()
    The characters within a string are converted to lowercase while respecting the current locale.

    For most languages, this will return the same as toLowerCase().

    String.prototype.toLocaleUpperCase( [locale, ...locales])
    The characters within a string are converted to uppercase while respecting the current locale.

    For most languages, this will return the same as toUpperCase().

    String.prototype.toLowerCase()
    Returns the calling string value converted to lowercase.

    String.prototype.toString()
    Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

    String.prototype.toUpperCase()
    Returns the calling string value converted to uppercase.

    String.prototype.trim()
    Trims whitespace from the beginning and end of the string.

    String.prototype.trimStart()
    Trims whitespace from the beginning of the string.

    String.prototype.trimEnd()
    Trims whitespace from the end of the string.

    String.prototype.valueOf()
    Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.

    String.prototype[@@iterator]()
    Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.
*/

// - - - - - - - - - -
// BOOLEAN
let bool1 = true; // 1
let bool2 = false; // 0

false == 0; //   true
false === 0; //  false
" 0 ".length; // 3

// ! Don't use two-equal-signs comparison
console.log(21702 == "21702");

// ! Do
console.log(21702 === "21702");

// - - - - - - - - - -
// OTHER PRIMITVE VALUE TYPES
undefined;
console.log(typeof undefined);
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

null;
console.log(typeof null, "(Null)");
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

NaN;
console.log(typeof NaN, "(NaN)");
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

// - - - - - - - - - -
// EXPLORING SCOPES
let a_1 = 42;

function doSomething() {
    let a_2 = 108;

    // ! Don't use undeclared variables
    // f = "lalala";

    // ! Do
    // let f = "lalala"

    for (let i = 0; i < 5; i++) {
        // console.log(i); // 0,1,2,3,4
    }
    // console.log(i) // undefined
}

doSomething();
// console.log(a_2);
// console.log(f);

// - - - - - - - - - -
// FUNCTIONS
// ! Don't - obsolete default operator
function add(a, b) {
    let _a = a || 42;
    let _b = b || 108;
    return _a + _b;
}

// ! Do - default values in parameter list
function add(a = 42, b = undefined) {
    return a + b;
}

let result = add(3, 7); // 10

console.log(typeof add);

// Example for a callback function
// b is a lambda function literal that will
// be executed by the calling function
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
button.addEventListener("click", function (event) {
    console.log("clicked!");
});

// Arrow functions
// () => {};
// arg1 => arg1 + arg2
// (arg1, arg2) => { return arg1 + arg2 }

let example = document.createElement("div"),
    data = {};

callback = function (event, data) {
    // ...
};
// Convenience event callback with additional
// data by using an arrow function
example.addEventListener("click", (event) => callback(event, data));

// - - - - - - - - - -
// PATTERN
// - - - - - - - - - -
// IIFE - Immediate Invoked Function Expression
// Scoped application modules (old style)
var A = (function () {
    "use strict";
    // - - - - - - - - - -
    let _a = 42;
    function _log() {
        console.log(
            "\n - - - - - - - - - -\n",
            "IFEE - scoped module with private/public (kind of)",
            "\n - - - - - - - - - -\n\n"
        );
    }
    return { log: _log };
    // - - - - - - - - - -
})();
A.log();
