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
   * Create the login form
   * @return {boolean}
   */
  setLoginForm = function () {
    $('<form />') //                  collect <form>
      .attr('id', 'form-login')
      .attr('action', 'login.php')
      .attr('method', 'post')
      .addClass('form-login')


      .append('<fieldset />')
      .find('fieldset') //            collect <fieldset>
      .append('<legend />')
      .find('legend') //              collect <legend>
      .text('Login')

      // email field
      .parent() //         collect parent of <legend>
      .append('<div />')
      .find('div:last') //                 collect <div>
      .append('<label />')
      .find('label') //               collect <label>
      .attr('for', 'login-email')
      .text('Email')

      .parent() //                    collect parent of <label>
      .append('<input />')
      .find('input') //               collect <input>
      .attr('id', 'login-email')
      .attr('name', 'email')
      .attr('type', 'email')

      // password field
      .closest('fieldset')
      .append('<div />')
      .find('div:last') //                 collect <div>
      .append('<label />')
      .find('label') //               collect <label>
      .attr('for', 'login-password')
      .text('Password')

      .parent() //                    collect parent of <label>
      .append('<input />')
      .find('input') //               collect <input>
      .attr('id', 'login-password')
      .attr('name', 'password')
      .attr('type', 'password')

      // keep password checkbox
      .closest('fieldset')
      .append('<div />')
      .find('div:last-child') // better use CSS3 syntax instead of jqueries :last!
      .append('<label />')
      .find('label')
      .text('keep password')
      .prepend('<input />')
      .find('input')
      .attr('name', 'login-keep-password')
      .attr('type', 'checkbox')

      // button
      .closest('fieldset')
      .append('<button />')
      .find('button')
      .attr('type', 'submit')
      .text('login')

      .closest('form')
      .prependTo('aside'); // into the DOM
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
    let
      _event = e || window.event,
      _action = _event.target.action || undefined,
      _data = $(_event.target)
      .serialize() || undefined,
      _request = undefined;

    //! early exit
    if (!_event) return false;
    if (!_action) return false;

    //! cancel the browsers job
    _event.preventDefault();

    console.log(_data);

    // ! do the job
    _request = $.ajax({
      url: _action,
      data: _data,
      method: 'get',
      dataType: 'json'
    });

    _request.done(function (response) {
        console.log(response);
      })
      .fail(function (error) {
        console.log(error);
      });

  }

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    // initialisation
    init();

    // the form event listener
    $('aside')
      .on('submit', 'form#form-login', onFormLoginSubmit);
  });
  // - - - - - - - - - -
}(jQuery));