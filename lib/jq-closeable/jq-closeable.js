/* global console, window, document */
/**
 * A jQuery Plugin To Close Any Element
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/24
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 * @dependencies jQuery-3.4.1
 */

// IIFE - Immediate Invoked Function Expression
(function (jq) {
  'use strict'
  // - - - - - - - - - -
  var $ = jq || undefined;

  // check for jQuery
  if ($ === undefined) return false;
  if (window.jQuery === undefined) return false;

  console.dir($.fn);

  $.fn.closeable = function () {};
  // - - - - - - - - - -
})(jQuery);