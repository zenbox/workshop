/**
 * AJAX
 *
 * @package Webapplication
 * @module ajax
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019/07/18
 * @license MIT License <https://opensource.org/licenses/MIT>
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict'
    // - - - - - - - - - -
    // DECLARATION
    let
        url = 'content.html',
        request = new XMLHttpRequest(),
        data = JSON.stringify({
            email: 'michael.reichart@gfu.net',
            password: 'geheim'
        });

    // METHODS
    function onRequestReadyStateChange(event) {
        //console.log(event);

        switch (request.readyState) {
            default:
                console.log('no idea what happened...');

                break;
            case 1:
                console.log('request opened.');

                break;
            case 2:
                console.log('request sent.');

                break;
        }


    }


    // CONTROL
    request.open('POST', url);
    request.send(data);

    request.addEventListener('readystatechange', onRequestReadyStateChange);
    // - - - - - - - - - -
})()