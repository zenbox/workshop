/** A SIMPLE UI CONTROL
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-03-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// jQuery!
// $(window.document).ready(function () {
//     // - - - - - - - - - -
//     // DECLARATION
//     let hamburger = $('.hamburger'),
//         content = $('#content'),
//         className = 'content--aside-open';

//     // METHODS
//     function onHamburgerClick(event) {
//         content.toggleClass(className);
//     };

//     // EVENT CONTROL; CONTROL
//     hamburger.on('click', onHamburgerClick);
//     // - - - - - - - - - -
// });

// Vanilla JS!
window.addEventListener('load', function () {
    // - - - - - - - - - -
    // DECLARATION
    let
        hamburgerList = document.querySelectorAll('.hamburger'),
        hamburger = hamburgerList[0],
        content = document.querySelector('#content'),
        className = 'content--aside-open';

    // METHODS
    function onHamburgerClick(event) {
        content.classList.toggle(className);
    };

    // EVENT CONTROL; CONTROL
    hamburger.addEventListener('click', onHamburgerClick)
    // - - - - - - - - - -
});