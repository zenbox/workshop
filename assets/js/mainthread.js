/* global console, window, document */
/**
 * A Main Thread Using a Worker Thread
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
  let
    init = undefined,
    worker = new Worker('assets/js/workerthread.js'),
    buttons = document.querySelectorAll('button[data-command]'),
    message = document.querySelector('#message'),
    output = document.querySelector('#data');

  // METHODS
  init = function () {
    worker.postMessage(JSON.stringify({
      message: 'A message from main.'
    }));
  };

  function onWorkerMessage(event) {
    let data = JSON.parse(event.data);

    if ('message' in data) {
      message.innerHTML = data.message;
    }

    if ('data' in data) {
      for (let key in data.data) {
        output.innerHTML += '<li>' + key + ': ' + data.data[key] + '</li>';
        //data.innerHTML += `<li>${key}: ${data['key']}</li>;
      }
    }

  }

  function onButtonsClick(event) {
    let
      url = undefined,
      command = event.target.dataset.command;

    switch (command) {
    case 'stop':
      worker.terminate();
      break;
    case 'start':
      worker.postMessage(JSON.stringify({
        command: 'start'
      }));
      break;
    case 'ajax':
      let command = {
        command: 'ajax',
        url: event.target.dataset.url
      };
      worker.postMessage(JSON.stringify(command));
      break;
    }
  }

  // CONTROL
  window.addEventListener('load', init);
  worker.addEventListener('message', onWorkerMessage);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onButtonsClick)
  }
  // - - - - - - - - - -
}());