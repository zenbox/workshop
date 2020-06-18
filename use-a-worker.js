/*global console, window, document */
/**
 * use a web worker
 *
 * @package Application
 * @author Michael [michael@zenbox.de]
 * @since 2017/03/03
 * @version v1.0.0
 * @copyright (c) 2017 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function() {
    'use strict';
    // - - - - - - - - - -
    let worker = null,
        init = null,
        send = null,
        terminate = null,
        onMessage = null;

    init = function(callback) {
        worker = new Worker('assets/js/external-thread.js');
        console.log(worker);
        worker.addEventListener('message', onMessage);
        callback('ping');
    };

    send = function(data) {
        worker.postMessage(data);
    };

    terminate = function() {
        worker.terminate();
    };

    onMessage = function(event) {
        let data = event.data;

        console.log(data);

        data = JSON.parse(data);
        document.body.innerHTML += '<p>' + data.value.joke + '</p>';
    };

    init(send);


    // - - - - - - - - - -
}());
