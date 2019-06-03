/* global console, window, document */
/**
 * A Notification Application
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/03
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
    // primitive values (string, number, boolean)
    a = undefined,

    // list, objects
    container = {},
    collection = [],

    // functions
    init = function () {},
    setContainer = function () {},
    removeContainer = function () {};

  // - - - - - - - - - -
  // METHODS
  // - - - - - - - - - -
  setContainer = function () {
    console.log('set container');

    $('<div>')
      .addClass('notification-container')
      .appendTo('body');


  };

  removeContainer = function () {
    console.log('remove container');
  };

  init = function () {
    console.clear();
    console.log('notifications running');
    setContainer();
  };

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    init();
  });
  // - - - - - - - - - -
}(jQuery));