/* global console, window, document */
/**
 * Event Handling in jquery
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/04
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

jQuery(function ($) {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  // - - - - - - - - - -
  let
    init = function () {},
    setLoginForm = function () {};

  // - - - - - - - - - -
  // METHODS
  // - - - - - - - - - -
  /**
   * create the login form
   * @return {boolean}
   */
  setLoginForm = function () {

  };

  /**
   * Initialisation
   * @return {none}
   */
  init = function () {
    setLoginForm();
  };

  // - - - - - - - - - -
  // EVENT HANDLER METHODS
  // - - - - - - - - - -
  /**
   *
   * @param  {object} e  event object
   * @return {boolean}   wether the function did the job or not
   */
  function onFormLoginSubmit(e) {
    let _event = e || window.event;

    //! early exit
    if (!_event) return false;

    //! cancel the browsers job
    _event.preventDefault();

    // ! do the job
    console.dir(_event.target);
  }

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    // initialisation
    init();

    $('form#form-login')
      .on('submit', onFormLoginSubmit);
  });
  // - - - - - - - - - -
}(jQuery));