// Javascript as a programming language
// C#, Java, Python ...

console.log("Hello world!");

// WEAK TYPED MEMORY
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
let loginForm = document.querySelector('#login');

console.clear();
console.log(loginForm);

loginForm.addEventListener('submit', onLogin);

window.addEventListener('load', () => console.log('Init! All loaded!'));
