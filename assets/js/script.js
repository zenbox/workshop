// Javascript as a programming language
// C#, Java, Python ...

console.log("Hello world!");

// WEAK TYPED MEMORY
// 1. Primitive value types
// Variables (placeholder for calculated values)
let a = 42; // number: integer value
let b = 10.8; // number: floating value

// Fun fact
console.log(0.1 + 0.2) // floating point values aren't precise !

let result = (a + a) / b;
let squareroot = Math.sqrt(9);

let d = "its a text!"; // string
let e = true; // boolean: state "yes"
let f = false; // boolean: state "no"


// 2. variables with multiple values ...
// JavaScript Object Notation - JSON
let obj = {
    "email": "michael.reichart@gfu.net",
    "password": "geheim",
    "age":25
};

console.log('- - -');
console.log(obj.email);
console.log(obj.password);
console.log(obj.age);
console.log('- - -');

// object iteration
for (const key in obj) {
        console.log(key,"=>", obj[key]);
}

let arr = ["michael.reichart@gfu.net", "geheim", 25];
console.log( arr[0] );
console.log( arr[1] );
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
    console.log("=>", arr[i]);
}

arr.forEach((elem)=>console.log(elem));

// CONTROL STRUCTURES
// Iterations
for (let i = 0; i < 10; i = i + 1) {
    a = a + i;
    console.log(a);
}

// Conditions
if (a == 52) {
    console.log('YES!');
} else {
    console.log("NO!");
}


// PROGRAMMING
// functions
function calcSum(m, n) {
    console.log("I'm calculating ...");
    let r = n + m;
    return r;
}
console.log(calcSum(a, b));
result = calcSum(42, 312);

function onLogin(event) {
    // Stop the browser default behaviour
    event.preventDefault();

    console.log('on login!');

}

// event control
let loginForm1 = document.querySelector('#login');

//console.clear();
console.log(loginForm1);

loginForm1.addEventListener('submit', onLogin);

window.addEventListener('load', () => console.log('Init! All loaded!'));












let fn = function () { };
console.log(typeof fn);

fn();