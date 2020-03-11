/** Prototyping
 *
 * @package Webapplication
 * @module App
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    //- - - - - - - - - -

    // Parent class
    function Shape(w, h) {
        this.width = w;
        this.height = h;
    }

    Shape.prototype.resize = function (w, h) {
        this.width = w;
        this.height = h;
    }

    // Child class
    function Cube() {}
    Cube.prototype = new Shape();

    let shape = new Shape(10, 10);
    shape.resize(25, 25);

    let cube = new Cube(15, 15);

    console.log(shape.width);
    // console.log(cube.width);
    //- - - - - - - - - -


    // ES6+
    class Person {
        constructor(n) {
            this.name = n;
        }
    }

    let john = new Person('John');

    console.log(john.name);
    //- - - - - - - - - -
}());