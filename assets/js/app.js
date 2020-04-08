/** An Example Application
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-04-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */

(function () {
    'use strict';
    // - - - - - - - - - - -
    // Declaration
    // hoisting!
    let a = 42,
        b = 108;

    // Methods / functions


    // Control (event control)
    // getElementById(), getElementsByClassName()
    let arr = document.querySelectorAll('a[href]');

    for (let i = 0, len = arr.length; i < len; i += 1) {
        arr[i].addEventListener('click', function (event) {
            // no browser 
            event.preventDefault();
            console.log('click!');
        });
    }

    // - - - - - - - - - - -
}())