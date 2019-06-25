/* global console, window, document */
/**
 * AJAX Requests
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
    load = undefined;

  load = function (fn) {
    let
      _filename = fn || undefined,
      request = new XMLHttpRequest(),
      method = 'get';

    if (_filename === undefined) return false;

    request.addEventListener('readystatechange', function () {
      console.log(request.readyState);

      switch (request.readyState) {
      case 1:
        console.log('request opened');
        break;
      case 2:
        console.log('request sent');
        break;
      case 3:
        console.log('response');
        break;
      case 4:
        console.log('response ready');
        break;
      }

    });

    request.open(method, _filename);
    request.send();
  };

  // METHODS
  main = function () {
    load('assets/data/data.txt');
  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());