/*global console, XMLHttpRequest, setInterval, self */
/**
 * an external thread
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
    let ask = null,
        request = null,
        data = null,
        onMessage = null;

    ask = function() {
        request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function(event) {
            if (request.readyState === 4 && request.status === 200) {
                self.postMessage(request.responseText);
            }
        });
        request.open('get', 'http://api.icndb.com/jokes/random');
        request.send();
    };

    onMessage = function(event) {
        let data = event.data;
        console.log(data);
    };

    setInterval(function() {
        ask();
    }, 3000);

    self.addEventListener('message', onMessage);
    // self.close();
    // - - - - - - - - - -
}());
