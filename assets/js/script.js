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
var a = 42;
var dataLayer = [];

// Methods
function onSubmit(d) {
    // The event object
    console.dir(d);
}

var data = {
    key: 'value'
};

onSubmit(data);

// Eventlistener
loginForm.addEventListener('submit', onSubmit);


// JavaScriptObjectNotation
// JSON incl. variable types
var myObject = {

    // Primitive value types
    myString: 'value', // string
    myNumber: a, //  number
    myBoolean: true, //  boolean

    myArray: [42, 'Text', 256], // array
    myObject: {
        key: 'value',
        key_2: 'value'
    },
    myFunction: function () {
        console.log('fn!')
    }

};

console.log(myObject.myArray[1]);

// var dataLayer = [{
//         key: 'value'
//     },
//     {
//         key: 'value'
//     },
//     {
//         key: 'value'
//     }
// ];

// Indexes
var arr = [42, 108, 256, 512, 1024, 201];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// Iteration of arrays
for (var i = 0; i < arr.length; i++) {
    var quadrat = arr[i] * arr[i];
    console.log(quadrat);
}

// Iteration of objects
var user = {
    surname: 'Müller',
    prename: 'Max',
    email: 'mail@mueller.de'
};

console.clear();
// console.log(user['surname']);

for (var key in user) {
    console.log(key, ':', user[key]);
}


// Conditions
var cond = false;

// Simple condition
if (cond === true) {
    console.log('TRUE!!')
}


// Condition with no exit
if (cond === true) {
    console.log('TRUE 2!!')
} else {
    console.log('FALSE 2!!')
}


cond = 'fantastic!';

// Multiple conditions
if (cond === true) {
    console.log('%cTRUE 3!!', 'color:red')
} else if (cond === 'fantastic!') {
    console.log('FANTASTIC!!');
} else {
    console.log('FALSE 3!!')
}


// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
var onLogin = function (event) {
    event.preventDefault();

    // The event object
    console.dir(event);

    // - - - - - -
    // console.clear();
    console.time('timer 1');
    // - - - - - -

    // Getting form data
    var form = document.querySelector('#login');
    console.dir(form);

    // Read the form elements
    for (var i = 0; i < form.length; i++) {

        var element = form[i];

        if (
            element.tagName !== 'FIELDSET' &&
            element.tagName !== 'BUTTON'
        ) {
            // object
            console.dir(element);

            // properties (member of object)
            console.log('- - - - - -');
            console.log('- - - - - -');
            console.log(element.id);
            console.log(`%c${element.value}`, 'color:red; font-weight:bold;');
            console.log(element.type);




            if (Object.keys(element.dataset).length > 0) {
                console.log('dataset has records!');

                // Read data-attributes
                console.dir(element.dataset)
                console.log(element.dataset.tA)
                console.log(element.dataset.tC)

                // Push dataset member into dataLayer
                dataLayer.push({
                    tA: element.dataset.tA,
                    tC: element.dataset.tC,
                    type: event.type,
                    time: event.timeStamp,
                    target: event.target
                });
            }

        }

    }
    // - - - - - -
    console.timeEnd('timer 1');
    console.dir(dataLayer);
}

loginForm.addEventListener('submit', onLogin);