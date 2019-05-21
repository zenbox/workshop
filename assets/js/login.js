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
        // Attributes
        .attr('id', 'keep')
        .attr('type', 'checkbox')
        .attr('name', 'keep-password')
        .removeAttr('name')

        // Classes
        .addClass('default')
        .removeClass('default')
        .toggleClass('default')

        // CSS
        .css({
          'border': '1px solid red',
          'background-color': 'lightgrey',
        })

        .appendTo(form);

      // ! nicht gut
      // jQuery('<input>').attr('id', 'keep');
      // jQuery('#keep').attr('name', 'keep-password');
    }

    /*
        <div id="keep">
        <input type="checkbox" id="cb">
        <label for="cb">keep Password</label>
        </div>
     */
    function checkbox() {

      var
        container = jQuery('<div>')
        .attr('id', 'keep'),

        input = jQuery('<input>')
        .attr('type', 'checkbox')
        .attr('id', 'cb'),

        label = jQuery('<label>')
        .text('keep password')
        .attr('for', 'cb');

      container
        .append(input)
        .append(label);

      jQuery(container)
        .appendTo('#form-login');
    }

    // The Main Programm Control Function
    main = function () {
      manipulate();
      checkbox();
    }

    // CONTROL
    jQuery(function () {
      main();
    });

    // EVENT CONTROL
    elements.on('focus', onFocus);

    // - - - - - - - - - -
  });