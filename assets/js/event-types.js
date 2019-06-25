/* global console, window, document */
/**
 * Event types
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/25
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    main = undefined,
    onKeyUp = undefined,
    onMouseDown = undefined;

  // METHODS
  main = function () {

    console.log('loaded');


    let domObj = document.querySelector('input#login-email');
    let domObj2 = document.querySelector('h1');

    onKeyUp = function (event) {
      console.log(event);
    }

    onMouseDown = function (event) {
      event.preventDefault();
      console.log(event);
    }

    domObj.addEventListener('keyup', onKeyUp);
    domObj2.addEventListener('mousedown', onMouseDown);
  };

  // CONTROL
  document.addEventListener('readystatechange', function (event) {
    console.log(document.readyState);
  });
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());