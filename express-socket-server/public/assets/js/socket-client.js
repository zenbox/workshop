/** A Simple Websocket Client
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    //- - - - - - - - - -
    // Declarations
    // connect to socket.io()
    let socket = io();

    // Functions

    // Event control
    socket.on('connect', function () {
        console.log('server socket connected');

        // server talked:
        socket.on('serverMessage', function (data) {
            console.log(data);
        });

        socket.on('serverBroadcastMessage', function (data) {
            console.log(data);
        });

        // clients talks:
        socket.emit('clientMessage', 'a message from a client')

    })
    //- - - - - - - - - -
}());