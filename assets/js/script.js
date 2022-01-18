// Javascript as a programming language
// C#, Java, Python ...

console.log("Hello world!");


// Variables (placeholder for calculated values)
let a = 42; // integer value!
let b = 108;

let result = (a + a) / b;
let squareroot = Math.sqrt(9);


console.log( 0.1 + 0.2 ) // floating point values!


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


    a = 42;
let d = "its a text!";
let e = true; let f = false;


// functions
function calcSum(m, n) { 
    console.log("I'm calculating ...");
    let result = n + m;
    return result;
}

console.log( calcSum(a,b) );
console.log( calcSum(a,a) );
console.log( calcSum(1,4) );
console.log( calcSum(108,204) );
console.log( calcSum("Mist", 3) );
