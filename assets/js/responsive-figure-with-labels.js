/* global console, window, document */
/**
 * responsive figure with labels
 *
 * @author Michael <michael.reichart@gfu.net>
 * @since 2018/08/31
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
/**
 * IIFE Pattern
 * Immediate Invoked Function Expression
 */
!(function () {
  'use strict';
  // - - - - - - - - - -
  // GLOBAL DECLARATION
  let labels = {
    "label-4": {
      "x": 70,
      "y": 40
    },
    "label-5": {
      "x": 60,
      "y": 20
    }
  };

  // METHODS
  function onResize() {
    // LOCAL DECLARATION
    let
      left = null,
      top = null,
      w = document.querySelector('#image')
      .width,
      h = document.querySelector('#image')
      .height,
      l = document.querySelector('.label-4');

    console.log('(' + w + ', ' + h + ')');

    left = w / labels['label-4'].x;
    top = h / labels['label-4'].y;

    l.setAttribute('style', 'left:' + left + 'px; top:' + top + 'px;');
  };

  // CONTROL
  window.addEventListener('resize', onResize);
  // - - - - - - - - - -
}());