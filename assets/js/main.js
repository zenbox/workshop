/**
 * A Main Application
 * 
 * @desc Cum sociis natoque penatibus et magnis dis parturient montes, 
 *       nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis 
 *       parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada 
 *       magna mollis euismod. Duis mollis, est non commodo luctus, 
 *       nisi erat porttitor ligula, eget lacinia odio sem nec elit.
 * 
 * @package ApplicationName
 * @module Main
 * @see /other/modules
 * @author Michael <michael.reichart@gfu.net>
 * @author Stephan <stephan ...>
 * @version 1.0.0
 * @since 1.0.0
 * @since 2019/07/16
 * @license MIT <https://opensource.org/licenses/MIT>
 * @copyright 2019 Michael Reichart
 */

console.log(window);

!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // -> ES 5:
    var
        a = 42,
        b = 108;

    // -> ES 6+
    let c = 512;

    // METHODS
    // CONTROL
    // - - - - - - - - - -
})()


// Select something from DOM
document
    .querySelector('h1')
    .innerText = 'A New Text';

document
    .querySelector('p')
    .innerText = 'A New Text with some more stuff';