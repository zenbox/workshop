/** NAVBAR BEHAVIOUR
 *
 * @desc Events for the navbar component
 *
 * @package Webapplication
 * @module header, navbar
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019-08-02
 * @see inspired by Dev Ed: https://www.youtube.com/watch?v=gXkqy0b4M5g
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    /** GLOBAL DECLARATION */
    let
        moduleName = 'behaviour.js',
        registered = [];
    // - - - - - - - - - - - - - - - - - - - -

    /** NAVBAR SLIDER COMPONENT */
    const slide = () => {
        // - - - - -
        // - - - - -
        const burger = document.querySelector('.navbar .burger');
        const nav = document.querySelector('.navbar ul');
        const links = document.querySelectorAll('.navbar li');

        burger.addEventListener('click', () => {
            nav.classList.toggle('active');

            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `slideNavigation 0.5s ease forwards ${index/7}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
        // - - - - -
    }
    // - - - - - - - - - - - - - - - - - - - -
    /** INITIALISATION
     * @return {Boolean} 
     */

    function init() {
        register(slide);

        try {
            for (let i = 0; i < registered.length; i++) {
                registered[i]();
            }
        } catch (error) {
            console.log(error);
            return false;
        }
        return true;
    };

    function register(fn) {
        registered.push(fn);
    };

    window.onload = init();
    // - - - - - - - - - -
})()