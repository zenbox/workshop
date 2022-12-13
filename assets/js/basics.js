// ECMA Script
// ES 2015 (ES6+)

console.log("Hello world");

// Variablen und Typen
// number
let a = 42;
// var b = 43;
const PI = 3.1415;

console.log(a + PI);

// string
let content = "text";
console.log(typeof content);
console.log(content.length);

console.log(`${content} something new`);

// boolean
true;
false;

console.log(typeof false);

// Comparing values!
console.log(true == "1");
console.log(false == "");

// Comparing type and values!
console.log(true === "1");
console.log(false !== "1");

undefined;
null;
NaN;

// Multi valent types
// Array
let arr = [true, 2, "three"];
console.log(arr.length);

console.log(arr[0]);

let data = [20, 55, 12, 80, 74];

// Object
const obj = {
  key: "value",
  otherKey: "value",
  "another Key": 42,
  list: data,
  fn: function () {
    console.log("hey!");
  },
};

console.log(obj.otherKey);
console.log(obj["another Key"]);

obj.fn();

console.log(typeof arr);
console.log(typeof obj);
