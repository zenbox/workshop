/* global console, window, document */
/**
 * A Login Script With jQuery
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/20
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

jQuery(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    var
      // undefined variables

      // DOM elements
      form = jQuery('#form-login'),
      elements = jQuery('#form-login input'),

      // functions
      onFocus = function () {},
      manipulate = function () {},
      main = function () {};

    // METHODS
    onFocus = function (event) {
      console.log('focus an input field!');
      console.log(global);
    }

    // DOM Manipulation
    manipulate = function () {
      // adding elements
      jQuery('<input>')
        .appendTo(form);
    }

    // The Main Programm Control Function
    main = function () {
      console.log('main');
      manipulate();
    }

    // CONTROL
    jQuery(window)
      .on('load', main);

    // EVENT CONTROL
    elements.on('focus', onFocus);

    // - - - - - - - - - -
  });