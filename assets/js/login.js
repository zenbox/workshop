/* global console, window, document */
/**
 * Login
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/25
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    main = undefined,
    onLogin = undefined,
    getLoginCredentials = undefined,
    submitLoginCredentials = undefined;

  // METHODS
  /**
   * @return {Object}
   */
  getLoginCredentials = function () {

    let form = document.querySelector('#login');

    for (let i = 0; i < form.length; i++) {
      console.log(i, ': ', form[i]);
    };



    let email = document.querySelector('#login-email')
      .value.trim();
    let password = document.querySelector('#login-password')
      .value.trim();

    if (email === '') {
      throw 'invalid email value';
    }

    if (password === '') {
      throw 'invalid password value';
    }

    return {
      email: email,
      password: password
    };
  };

  /**
   *
   * @param  {Event} event
   * @return {[type]}
   */
  onLogin = function (event) {

    event.preventDefault();

    try {
      let loginCredentials = getLoginCredentials();
      console.log(loginCredentials);

    } catch (error) {
      console.log(error);
    }
  };

  main = function () {

    document.querySelector('form#login')
      .addEventListener('submit', onLogin);

  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());