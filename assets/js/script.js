/** 
 *
 *  @desc 
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-06-04
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
(function () {
    'use strict';
    // - - - - - - - - - -

    let
        hamburgerState = 'inactive',
        hamburgerButton = document.querySelector('#hamburger'),
        htmlDocument = document.querySelector('html');

    function onHamburgerButtonClick(event) {

        // Setting states:
        if (hamburgerState === 'inactive') {
            hamburgerState = 'active';
        } else {
            hamburgerState = 'inactive'
        }

        // State dependent result:
        if (hamburgerState === 'active') {
            hamburgerButton.classList.add('hamburger-close');
            htmlDocument.classList.add('active-nav');
        } else {
            hamburgerButton.classList.remove('hamburger-close');
            htmlDocument.classList.remove('active-nav');
        }

    }

    hamburgerButton.addEventListener('click', onHamburgerButtonClick);
    // - - - - - - - - - -
}())