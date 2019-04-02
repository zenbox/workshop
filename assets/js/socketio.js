/* global console, window, document */
/**
 * A Socket IO Client
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/02
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let socket = io();

  // METHODS
  function onSocketConnect() {
    console.log('socket connected.');

    socket.on('message', onMessage)

    socket.emit('message', 'A hello from the outer space.')
  }

  function onMessage(message) {
    console.log(message);
  }

  // CONTROL
  socket.on('connect', onSocketConnect);
  // - - - - - - - - - -
}());