/* global console, window, document */
/**
 * A Javascript Architecture
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/24
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  // NEVER IN YOUR LIFE!!
  let
    main,
    onFocusInputEmail,
    onBlurInputEmail,
    inputEmail = document.querySelector('#login-email'),
    inputPassword = document.querySelector('#login-password');

  // METHODS
  main = function () {
    // EVENT CONTROL
    inputEmail.addEventListener('focus', onFocusInputEmail);
    inputEmail.addEventListener('blur', onBlurInputEmail);
  };

  // EVENT HANDLER METHODS
  /**
   * @param {Event} event the event object
   * @return none
   */
  onFocusInputEmail = function (event) {
    console.dir(event);
  };
  /**
   * @param {Event} event the event object
   * @return none
   */
  onBlurInputEmail = function (event) {
    console.log(event.target);
  };

  // CONTROL
  window.addEventListener('load', main);

  // - - - - - - - - - -
}());