"use strict";

// ECMA Script

var variable = 42;
// var i;

{
    for (var i = 0; i < 10; i++) {}
}
console.log(i); // 10

let string = "hallo welt";
for (let i = 0; i < 10; i++) {}

// Strings zusammenfügen
let a = 23;
let b = "2";
let c = b + a;

// Templates literals
c = `text ${a.toFixed(2)}`;
// console.log(c);

// Number
const d = 1;
const e = 1.1;
// console.log(d + e);

// Konstante um floating fehler zu kompensieren
// EPSILON;

// Boolean
// console.log(true === 1)
// console.clear();

// function greet() {
//     console.log("hallo Welt");
// }

(function () {
    console.log("hallo Welt");
})();

// Objekt in JSON
const obj = {
    number: 42,
    string: "text",
    greet: function () {},
};

// Common JSON
const commonObj = {
    "number": 42,
    "string": "text",
    "bool": true,
    "arr-2": [true, "two", 3],
};

console.log(JSON.stringify(commonObj));
console.log(JSON.stringify(obj));
let f = function () {};
console.log(typeof f);

let callback = function (event) {
    console.log(event.type);
    if (event.type === "click") {
        return true;
    }
};
// Callback
// document.addEventListener("DOMContentLoaded", function (event) {
//     console.log("DOM loaded");
//     document.addEventListener("click", (event, document) => {
//         console.log(document);
//         return event.type;
//     });
// });

// Klassen
class MyOtherClass {}
class MyClass {
    constructor(a, b, c) {
        this.a = a;
        // this._myPrivateObject = { greeting: "hallo Welt" };
        let _myPrivateVariable = "abc";
        this.variable = 42; // public class variable
    }

    get variable() {
        return this.variable;
    }
    set variable(value) {
        this.variable = value;
    }
}

const myClassInstance = new MyClass(42, 43, 44);

console.log(myClassInstance.variable);

myClassInstance.variable = 45;