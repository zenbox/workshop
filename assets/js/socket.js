/* global console, window, document */
/**
 * A Socket Example
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
  let
    address = 'ws://localhost:3000',
    socket = new WebSocket(address);

  // METHODS
  function onSocketOpen() {
    console.log('socket opened');
  };

  function onSocketError(error) {
    console.log('socket error', error);
  };

  function onSocketMessage(message) {
    console.log('socket message received', message);
  };

  // CONTROL
  socket.addEventListener('open', onSocketOpen);
  socket.addEventListener('error', onSocketError);
  socket.addEventListener('message', onSocketMessage);

  socket.send('A message from Chrome ...');
  // - - - - - - - - - -
}());