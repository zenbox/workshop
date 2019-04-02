/* global console, window, document */
/**
 * A Socket Server
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/02
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

let WsServer = require('ws')
  .Server,
  socketServer = new WsServer({
    host: 'localhost',
    port: 3000
  });


function onSocketConnection(socketConnection) {
  console.log('client via socket connected.');
  console.log(socketServer);

  socketConnection.send('hey there.');
  socketConnection.on('message', onSocketMessage);

}

function onSocketMessage(message) {
  console.log('message from client received:', message);
}

socketServer.on('connection', onSocketConnection);