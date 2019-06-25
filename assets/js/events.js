/* global console, window, document */
/**
 * Event Handling
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/24
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    onAnchorInNavClick = function () {}, // typeof 'function'
    main = function () {};

  // METHODS
  onAnchorInNavClick = function (event) {
    let _event = event || undefined;

    if (!_event) return false;
    console.dir(_event);

    // prevent browser behaviour
    _event.preventDefault();

    // filter for anchor elements
    console.log(_event.target);
    console.log(_event.target.tagName);

    switch (_event.target.tagName) {
    case 'A':
      console.log('Anchor is clicked!');
      break;
    default:
      console.log('Something is clicked!');
      break;
    }

    console.log('click!');

  };

  main = function () {
    let collection = document.querySelectorAll('nav');

    // Setting event listener
    collection.forEach(function (item, index) {
      item.addEventListener('click', onAnchorInNavClick);
    });
  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());