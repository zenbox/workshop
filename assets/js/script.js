/** Javascript Examples
 *
 *  @desc 
 *
 * @package Webapplication
 * @module Basics
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-14
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

window.console.log('hello world');



console.dir(window.document);



// ECMA Script

// Variables and types

let b = 108; // Control scoped
let c = 0.0001; // number

const PI = 3.1415;

// parseInt(a);
// parseFloat(a);

let text = "some text"; // string
let bool = true; // boolean


// Object
let obj = {
    "key": "value",
    "other key": 512,
    fn: function () {
        console.log(this['other key'])
    }
};

let arr = [true, "zwei", 3];

console.log(obj.key);

obj.fn();

// Functions
function fn(a, b) {
    var a = a || 100,
        b = b || 200;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

    }
    return (a + b);
}

fn(42, 108);
console.clear()

let d = 1;
let e = true;
let f = "1";

console.log(d + f / 10)

console.log("" == 0)



class  User { 
    
    constructor() { 
        this._property = 42;
    }

    myMethod() { }

    getProperty() { }
    setProperty() { }

}

let myUser = new User();

myUser.property = "hallo";

console.log(myUser.property);