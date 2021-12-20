// Basic Types
console.clear();

// Variables and types
var a = 42;
let b = 108;
const PI = 3.1415;

console.log(typeof a);

a = 'string as content';
console.log(typeof a);


// - - - - - - - - - -
a = true;
console.log(typeof a);

b = '1';
console.log(typeof b);

console.log(a != b);
console.log(a !== b); // Type and value comparison! ( !== )

// - - - - - - - - - -
console.clear();

a = 42;
PI;
console.log(typeof a);
console.log(typeof PI);

console.log((0.1 + 0.2) * 3);

a = parseFloat(a);
a = parseInt(a);

// - - - - - - - - - -
console.clear();

// Mehrwertige Variablen
let obj = {};
let arr = [];

// Common JSON
obj = {
    "key": "value",
    "other_key": 42,
    "third_key": true
};

// JSON
obj = {
    key: 'value',
    other_key: 42,
    third_key: true
};

arr = ['value', 42, true];

console.log(arr[1]); // Arrays are numeric
console.log(obj.key); // Objects are assoziative
console.log(obj['key']);

// Arrays are JSON!
let dataset = [{
        "name": "Ingo",
        "email": "ingo@gfu.net"
    },
    {
        "name": "Pierre",
        "email": "pierre@gfu.net"
    },
    {
        "name": "Kay",
        "email": "kay@gfu.net"
    },
    {
        "name": "Jörg",
        "email": "joerg@gfu.net"
    }
];

console.log(dataset);
console.log(typeof dataset);

// Classic array iteration
for (let i = 0; i < dataset.length; i++) {
    console.log(dataset[i]);
}
// Alternative array iteration (modern!)
dataset.forEach((elem) => {
    console.log(elem)
});

// Classic object iteration
for (key in obj) {
    console.log(key, ':', obj[key]);
}

// other types
// function, null, undefined, inifinite ...


// A function is a first class object!
console.clear();

function fn() {};
console.log(typeof fn);
fn();

// // Classic callback function syntax
// let emitter;
// emitter.on('connection', function (event) {
//     return event.type;
// });

// // ES6+ arrow function syntax
// emitter.on('connection', (event) => {
//     return event.type
// });

(function () {

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    // console.log('- - - - -')
    // console.log(i);


}())