// Interpreter-Anweisung
// -> Scope von Variablen begrenzt!
"use strict";

console.clear();

// Variablen und Typen

let a = 42; // Number (BigInt)
const PI = 3.14159; // Number (Double)

console.log(typeof a, typeof pi); // text
a = "text"; // String
a = "text";

a = `text ${PI}`; // String Literal!!
let b = a + " infix " + PI;
console.log(b);

// Konkatenierung ist böse!
console.log("result: ", 1 + 1);
console.log("result: ", 1 + 1 + " text");

// console.log(a); // text
// console.log(typeof a); // text

// // lowerCamelCase
// let aLowerCamelCaseVariable = 18;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Boolean
const bMyValue = true; // 1
const bMyOtherValue = false; // 0

console.clear();
console.log(true == true); // true
console.log(false == false); // true
console.log(true === 1);
console.log(true === "1");

// console.log("ext:", i);

// Nicht definierte Variablen
console.clear();
let c = undefined;
if (c === undefined) console.log("C ist nicht definiert");

// Nicht gesetzte Variablen
let d = null;

console.log(c);

// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -

// Mehrwertige Variablentypen:

const arr = [true, "zwei", 3];

// Referenz (Zeiger) auf Wertesammlungen
const obj = {
    a: true, // key: value - Paar
    b: "zwei",
    c: 3,
    fn: () => { },
    obj: {},
    arr: []
}

// Funktionen
function myFnNo13() {
    console.log("13!")
}

// Funktionszeiger
let myFnNo14 = function () { 
    console.log("14!")
}

// Arrowfunction
let myFnNo15 = () => { 
    console.log("15!")
 }


// Objektorientierung
class MyClass { }
 
// Funktionsorientierung

// => Ecma-Script - Module!

