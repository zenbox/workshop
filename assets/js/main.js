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
    let
        formLogin = document.querySelector('#form-login'),
        loginEmail = document.querySelector('#login-email');

    console.dir(formLogin);

    // METHODS;
    function log(m = undefined) {
        let _m = m;

        if (_m === undefined) return false;

        console.log(_m);
        return true;
    }

    function onFormLoginSubmit(event) {
        event.preventDefault();
        log('form submitted!')
    }

    // EVENT-CONTROL
    formLogin.addEventListener('submit', onFormLoginSubmit);
    window.addEventListener('load', function () {
        log('window loaded!');
    });

    console.dir(window);
    console.dir(document);


    // - - - - - - - - - -
})()


// Select something from DOM
document
    .querySelector('h1')
    .innerText = 'A New Text';

document
    .querySelector('p')
    .innerText = 'A New Text with some more stuff';