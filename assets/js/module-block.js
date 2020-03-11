/** A Module Block Pattern
 *
 * @desc Lorem ipsum ...
 *
 * @package Webapplication
 * @module webapplication
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
    // declaration
    const PI = 3.141529;

    let
        a = 42,
        b = 108,
        f = document.querySelector('form');

    // methods/functions

    /** A log function
     *
     * @version v1.0.1
     * @since 2020-03-11
     * @param {string} m  message as string
     * @returns {boolean}
     */
    function _log(m) {
        // ES5 Default Operator
        let message = m || undefined;

        // early exit
        if (typeof message !== 'string') return false;
        if (typeof message === 'undefined') return false;

        // - - - - -
        console.log(message);
        // - - - - -

        return true;
    }

    /** Another function
     *
     * @version v1.0.0
     * @since 2020-03-11
     * @param {type} desc
     * @returns {void}
     */
    function _fn() {
        console.log('fn');
    }

    // events controls
    window.addEventListener('load', function () {
        _log('loaded!');
    })

    // propagation
    // the application container
    window.app = window.app || {};

    // a module container
    window.app.myModule = {
        log: _log
    }
    //- - - - - - - - - -
}());