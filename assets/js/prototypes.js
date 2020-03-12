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
    // - - - - - - - - - -

    // Parent class
    // - - - - - - - - - -
    function Shape(w, h) {

        this.width = w;
        this.height = h;

        // Method that will be inherited
        this.move = function (x, y) {
            this.x = x;
            this.y = y;

            console.log('moving: ', x, y)
        }
    }

    // Child class
    // - - - - - - - - - -
    function Cube(w, h) {
        // Call the parent constructor
        // and set parent properties
        Shape.call(this, w, h);
    }

    // Append the parent class as prototype
    // - - - - - - - - - -
    Cube.prototype = new Shape();
    
    // Method that will notbe inherited
    Shape.prototype.resize = function (w, h) {
        this.width = w;
        this.height = h;
        
        console.log('resizing: ', this, w, h)
    }

    // Instaces of ...
    let shape = new Shape(10, 10);
    let cube = new Cube(15, 15);

    console.log('shape: ', shape);
    console.log('cube: ', cube);
    console.log('cube width:', cube.width);

    // Do some stuff
    shape.move(5, 5);
    shape.resize(25, 25);

    cube.move(30, 3); // works!
    cube.resize(50, 50); // doesn't work 'cause of late binding
    //- - - - - - - - - -
}());