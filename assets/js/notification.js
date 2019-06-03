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
  let init = undefined;

  // METHODS
  init = function () {
    console.log('notifications running');
  };

  // CONTROL
  $(function () {
    init();
  });
  // - - - - - - - - - -
}(jQuery));