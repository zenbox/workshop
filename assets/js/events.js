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
  let init = undefined;

  // - - - - - - - - - -
  // METHODS
  // - - - - - - - - - -
  init = function () {};

  // - - - - - - - - - -
  // EVENT HANDLER METHODS
  // - - - - - - - - - -
  function onAnchorClick(e) {
    var _event = e || window.event;

    //! early exit
    if (!_event) return false;

    //! cancel the browsers job
    _event.preventDefault();

    //! do the job
    console.dir(_event);
    console.dir(window.event);
    console.log('click on anchor!');

    console.log(_event.target);



  }

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    init();
    $('a[href]')
      .on('click', onAnchorClick);
    $('a[href]')
      .off('click', onAnchorClick);
    $('a[href]')
      .one('click', onAnchorClick);
  });
  // - - - - - - - - - -
}(jQuery));