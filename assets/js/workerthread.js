/* global console, window, document */
/**
 * A Worker Example
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/01
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION

  // METHODS
  function ajaxLoad(url) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {

      switch (xhr.readyState) {
      case 0:
        console.log('no ajax');
        break;
      case 1:
        console.log('request opened');
        break;
      case 2:
        console.log('request sent');
        break;
      case 3:
        console.log('response part 1 received');
        if (xhr.status === 404) {
          self.postMessage('file not found.');
        }
        break;
      case 4:
        console.log('response end');
        self.postMessage(xhr.response);
        break;
      }

      xhr.open('post', url);
      xhr.send();
    });
  }

  function onMainThreadMessage(event) {
    let
      data = {},
      command = undefined,
      url = undefined;


    data = JSON.parse(event.data);
    command = data.command;
    url = data.url;

    switch (command) {
    case 'start':
      break;
    case 'ajax':
      ajaxLoad(url);
      break;
    }

  }

  // CONTROL
  console.log(self);
  self.addEventListener('message', onMainThreadMessage)
  // - - - - - - - - - -
}());