/** 
 *
 *  @desc 
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-06-13
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

(function () {
    'use strict';
    // - - - - - - - - - -

    // Declarations
    let hamburger = document.querySelector('#hamburger-icon');

    // Methods
    function onHamburgerClick() { 
        
        let navigation = document.querySelector('#navigation');

        navigation.classList.toggle('nav-opened');


    }

    // Control (Event-)
    hamburger.addEventListener('click', onHamburgerClick);

    // - - - - - - - - - -
}())