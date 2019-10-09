// Variablen  und Typen
var a = 42.4589;
var b = 'a text';
var c = true; // false

var arr = [true, 2, 'drei'];
var obj = {
    nextKey: 2,
    'other-Key': 'drei',
    key: true
};

var fn = function () {
    console.log('do something ...');
};
fn();

function doSomething() {
    console.log('do something else...');
}
doSomething();

// console.log('arr[0]: ' + arr[0]);
// console.log(a);
// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));

// truthy and falsy values:
// console.log(true === 1);
// console.log(true === 1);
// console.log(false === 0);
// console.log(false === '0');
// console.log(false === 'false');
// console.log(false === '      ');

// console.log(42 == '42');

var d = undefined;
var e = null;

if (d == undefined) {}
if (e == null) {}

// console.log(typeof (d));
// console.log(typeof (e));
// console.log(typeof (arr));
// console.log(typeof (obj));

window.document.querySelector('h1').innerText = 'New Text';



// ES 6+
let it = 'be';
const PI = 3.14159;

fn = function () {
    var f = 512;
    console.log(f);


}
fn();
// console.log(window.f);


// function () {
//     'use strict';
//     var a = 44;
//     console.log(a);

// }
// Immediate Invoked Function Expression
// IIFE - Pattern
(function () {
    'use strict';
    // - - - - - - - - - -
    let a = 42;
    let i;

    for (let i = 0; i < 10; i += 1) {
        console.log(i);

    }

console.log(i);

    console.log('init')
    // - - - - - - - - - -
}());