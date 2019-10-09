/** APPLICATION
 *
 *  @desc lorem ipsum dolor ...
 *
 * @package Webapplication
 * @module header, navbar
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019-10-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION, INITIALISATION
    let myAnchors = document.querySelectorAll('a[href]');

    // FUNCTIONS
    function onAnchorClick(event) {
        // stop the browser action
        event.preventDefault();
        console.dir(event);
    }

    // EVENT LISTENER (CONTROL)
    for (let i = 0; i < myAnchors.length; i += 1) {
        myAnchors[i].addEventListener('click', onAnchorClick);
    }
    // - - - - - - - - - -
}())

// jQuery Code
jQuery('a[href]').on('click', function (event) {
    event.preventDefault();
    console.dir(event);
});

// Delegated Event
jQuery('.navbar').on('click', 'a[href]', function (event) {
    event.preventDefault();
    console.dir(event);
});