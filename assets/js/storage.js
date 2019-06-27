/* global console, window, document */
/**
 * Using storages
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/26
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let main = undefined;

  // METHODS
  main = function () {

    console.dir(window.localStorage);
    console.dir(window.sessionStorage);

    localStorage.setItem('KEY', JSON.stringify({
      key: 'value'
    }));

    let stored = localStorage.getItem('KEY');
    console.log(stored);
    console.log(JSON.parse(stored));

  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());