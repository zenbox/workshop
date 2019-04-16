/**
 * Javascript Basics
 * 
 * @description Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. 
 * Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
 *
 * @package ApplicationName
 * @author Michael <michael@zenbox.de>
 * @since 2019/04/15
 * @version 1.0.0
 * @copyright (c) 2019, Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// console output
console.log('hello world!');

// Javascript types
let a = 42; //number
console.log(typeof a);

// Primitive values types
let pi = 3.141529;


let b = 'hallo welt';
console.log(typeof b);

let c = false;
console.log(typeof c);

// pi = 'ein anderer Wert';
// console.log(typeof pi);

if (typeof a !== 'number') {
    console.log('is not a number!');
}

// Handling of dynamic types
// additino and concatening
console.log(a + pi);

console.log(' ' + a + b);
console.log(a + pi + b);
console.log(a + b + ' ' + pi);

// ES6+ -> neue Lösung
// console.log( ${'hey, ' (a + b)} );

// Boolean values
// false, true

console.log(typeof false);

console.log(false == false);
console.log(false == 0);
console.log(false == '0');
console.log(false == '');

// Always use type&value comparision!
console.log(false === '');
console.log(false !== '');

// undefined, null
// -> null -> this variable doesn't exist
// -< undefined -> this variable exists, but has no value yet
// null and undefined are falsy values


// more complex variables: objects
// Common JSON
let obj = {
    "key": "value",
    "boolean": false,
    "number": 42,
    "object": {
        "prename": "Michael"
    },
    "array": [true, "Zwei", 3]
};

console.clear();

// JS JSON
let object = {
    0: 'zero',
    surname: 'Reichart',
    key: 'value',
    prename: 'Michael'
};
console.log(typeof object);


// object iteration
for (var key in object) {
    console.log(object[key]);

}

let array = ['eins', 'zwei', 'drei'];
console.log(typeof array);

console.log(array[0]);
console.log(object[0]);

// iteration for an array
for (var i = 0, len = array.length; i < len; i += 1) {
    array[3] = "vier";
    console.log(array[i]);

}
i = 0;
console.log(i++);
console.log(++i);

// Array handling
// add an element
array.push('fünf');
array[9] = 'new';

console.log(array[array.length - 1]);

console.clear();

// remove an element
console.log(array.pop());
console.log('- - - - - - - - - -');


for (var i = 0, len = array.length; i < len; i += 1) {
    console.log(array[i]);
}
// console.log(array[array.length-1]);

// // return the first element of an array
// console.log(array.shift());
// console.log(array[0]);

console.log(array);

console.clear();

// Handling objects
// adding an element to an object
object.newKey = 'a new value';
object['newKey'] = 'a brand new value';
object['another new key'] = 'another new value';

// remove an object member
delete object.newKey;

// deleting an object
object = null;

console.dir(object);

console.clear()