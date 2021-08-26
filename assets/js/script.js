/*
 * Multiline comments
 * lorem ipsum dolor sit amet
 */

// Single line comments
// Another single comment line

console.log('hallo Welt');
console.clear();

// Declaration of variables
// i.e. Setting some document pointer
var loginForm = document.querySelector('#login');

// Methods
function onSubmit(xyz) {
    xyz

    // The event object
    console.dir(xyz);

}

var data = {
    key: "value"
};
onSubmit(data);

// Eventlistener
loginForm.addEventListener('submit', onSubmit);


// JavaScriptObjectNotation
// JSON incl. variable types
var myObject = {
    myString: "value", // string
    myNumber: 108, //  number
    myBoolean: true, //  boolean

    myArray: [42, "Text", 256], // array
    myObject: {
        key: "value",
        key_2: "value"
    },
    myFunction: function () {
        console.log('fn!')
    }

};

var dataLayer = [{
        key: "value"
    },
    {
        key: "value"
    },
    {
        key: "value"
    }
];


// Iterations


// Conditions
var cond = false;

if (cond === true) {
    console.log('TRUE!!')
}





if (cond === true) {
    console.log('TRUE 2!!')
} else {
    console.log('FALSE 2!!')
}


cond = 'fantastic!';

if (cond === true) {
    console.log('TRUE 3!!')
} else if (cond === 'fantastic!') {
    console.log('FANTASTIC!!');
} else {
    console.log('FALSE 3!!')
}