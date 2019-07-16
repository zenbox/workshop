/*
 My first Javacript programm
 @since 2019/07/15 
 @author Michael <michael.reichart@gfu.net>

 */

// alert('hello world');
// document.write('<p>hello world</p>');

// declaration of variables
// variable name can be
// [_$a-zA-Z0-9]

var a = '31',
    b = 108,
    c = 42,
    _a,
    $a,
    // lower camel case
    dayOfMonth = 21,
    logic = true, // false
    dayOfWeek = "Monday",
    paragraph = '<p class="myClass">Lorem ipsum dolor.</p>',
    paragraph2 = "<p class=\"myClass\"></p>";

log(typeof a);


log(typeof a);

log(typeof dayOfWeek);
log(typeof logic);
log(dayOfMonth);

function log(message) {
    if (typeof message === 'string') {
        console.log(message);
    }
}

console.clear();

if (a === 31) {
    console.log(a + b + c);
}

if (typeof b == 'string') {
    console.log(a + b + c);
}

console.log(1 == 1);
console.log(1 == 2);
console.log('- - - - -');
console.log(1 == true);
console.log(1 === true);
console.log('- - - - -');
console.log(1 == '1');
console.log('- - - - -');
console.log('' == false);
console.log(' ' == false);

console.clear();

// number types
var
    n = 42, //       integer
    pi = 3.14159; // float

console.log(typeof n);
console.log(typeof pi);
console.log(n + pi);

// no value??
// null, undefined
var rho;
console.log(rho);
console.log(typeof rho);
// console.log(theta);
// console.log(typeof theta);


console.clear();

// scopes?
var
    // hoisting!
    i,
    alpha = 45;

console.log(alpha);

function beta() {
    var gamma = 108;

    console.log(alpha); // 45
    console.log(gamma);
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

beta();

console.log(i); // undefined
//console.log(gamma); // undefined