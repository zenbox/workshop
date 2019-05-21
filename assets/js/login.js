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
      elements = jQuery('#form-login input'),
      onFocus = undefined;

    // METHODS
    onFocus = function (event) {
      console.log('focus an input field!');
      console.log(global);
    }

    // EVENT CONTROL
    elements.on('focus', onFocus);
    // - - - - - - - - - -
  });