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

!(function() {
  "use strict";
  // - - - - - - - - - -
  // DECLARATION
  // - - - - -
  let formLogin = document.querySelector("#form-login"),
    loginEmail = document.querySelector("#login-email");

  console.dir(formLogin);

  // - - - - -
  // METHODS
  // - - - - -
  /**
   * A shorter log function
   * @param {any} m
   */
  function log(m = undefined) {
    let _m = m;

    if (_m === undefined) return false;

    console.log(_m);
    return true;
  }

  /**
   * The magic event object
   * @param {Event} event the event facts collection
   */
  function onFormLoginSubmit(event) {
    event.preventDefault();
    log("form submitted!");
  }
  /**
   * main process
   */
  function main() {}

  // - - - - -
  // MAIN-CONTROL
  // - - - - -
  window.addEventListener("load", main);

  // - - - - -
  // EVENT-CONTROL
  // - - - - -
  formLogin.addEventListener("submit", onFormLoginSubmit);

  // - - - - - - - - - -
})();

// Select something from DOM
// document.querySelector("h1").innerText = "A New Text";
// document.querySelector("p").innerText = "A New Text with some more stuff";
