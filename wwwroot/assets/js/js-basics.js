// Javascript types

// Primitive value types
let a = 42; // number
let t = "hello"; // string
let b = true; // boolean

let u = undefined; // undefined

// Multiple value types
let arr = [42, 108, 512]; // object (numerical index)
let obj = { key: "value" }; // object (assotiative index)

// Function
let fn = function (a) {}; // function
fn("108");

// Weak types!
// a = t = b;

console.log(a, typeof a);

if (a === true) console.log("success");

console.log(1 == true);
console.log(0 == false);
console.log("0" == false);

console.log("" == false);
console.log(" " == false);
console.log("                   \n          " !== false);

console.log({} === {});
console.log([1] === [1]);
console.log([1][0] === [1][0]);
console.log([1][0] === { 1: 1 }[1]);



console.log(typeof a)
console.log(typeof t)
console.log(typeof b)
console.log(typeof u)
console.log(typeof obj)
console.log(typeof arr)
console.log(typeof null)

console.log( arr.length)
console.log( obj.length)

 window = undefined

console.log(Object.keys(obj).length)


let o = new Object()
let bool = new Boolean();

console.log(typeof bool)


window.jQuery = function () { }

console.log(window)