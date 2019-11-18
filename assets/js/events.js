/** Events
 *
 *  @desc An introdictino for JS events
 *
 * @package Webapplication
 * @module Events
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-11-18
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - -
    // DECLARATION
    let
        button = document.querySelector('button'),
        nav = document.querySelector('nav'),
        anchors = document.querySelectorAll('a[href]');

    // FUNCTIONS
    // CONTROL (EVENT-CONTROL)
    button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log('button');
        console.dir(event);
    });

    body.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('body')
        console.log(event.target);
    });

    nav.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('nav');
        console.log(event.target);
    });

    for (let i = 0; i < anchors.length; i += 1) {
        anchors[i].addEventListener('click', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            console.log('anchor');
            console.log(event.target);

        })
    }
    // - - - - - - - - -
}())