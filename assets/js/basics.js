var fn = function () {};
fn();
// IIFE - Immediate invoked function expression
(function () {}())

// $(document).ready(function () { });

// multivalue object types : call by reference!
const myObject = {};
const myArray = [];
const myFunction = function () {} // -> Objekt vom Typ function

// primitive values: call by value
let a = 42;
let s = 'text';
let b = true;

undefined, null, Infinity

setInterval(() => {
    document
        .querySelector('.content')
        .classList
        .toggle('content--aside-open')
}, 3000);





console.dir(window);