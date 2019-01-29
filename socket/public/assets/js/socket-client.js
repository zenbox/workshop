/**
 * a socket client
 */

(function () {
    'use strict';
    // - - - - - - - - - -
    // declaration
    let socket = io();

    socket.on('connect', function () {
        console.log('server socket connected!');

        // time?
        console.time('socketMessage');

        socket.emit('clientMessage', 'a message text from the client ...');
        socket.on('serverMessage', function (data) {
            console.log(data);
            console.timeEnd('socketMessage');
        })

        socket.on('serverBroadcast', function (data) {
            console.log(data);
        });

    });



    // - - - - - - - - - -
}());