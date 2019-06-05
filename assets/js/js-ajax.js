/* global console, window, document */
/**
 * Javascript ajax
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/05
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict'
  // - - - - - - - - -
  let
    request = new XMLHttpRequest(),
    data = '?email=michael.reichart@gfu.net&password=geheim';

  // methods
  function onReadyStageChange() {
    console.log(request.readyState);

    switch (request.readyState) {
    case 1:
      // block the screen, show an indicator
      break;
    case 2:
      // notification: request sent!
      break;
    case 3:
      // notification: response 200 or 404!
      break;
    case 4:
      jQuery('main')
        .html(request.responseText);
      console.dir(request);
      break;
    }
  }
  // control
  request.addEventListener('readystatechange', onReadyStageChange);

  request.open('get', 'content-1.html'); // 1
  request.send(data); // 2
  // - - - - - - - - -
})();