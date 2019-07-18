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
        path = 'assets/snippets/',
        filename = 'content.html',
        url = path + filename,
        request = new XMLHttpRequest(),
        data = JSON.stringify({
            email: 'michael.reichart@gfu.net',
            password: 'geheim'
        });

    // METHODS
    function onRequestReadyStateChange(event) {
        // console.log(event);

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
            case 3:
                console.log('response is coming.');
                console.log(request.status)
                console.log(request.statusText)
                break;
            case 4:
                console.log('response is ready.');
                console.dir(request.responseText);

                console.clear();
                console.log(request);

                document
                    .querySelector('#content')
                    .innerHTML += request.responseText;

                break;
        }


    }


    // CONTROL
    request.open('GET', url);
    request.send(data);

    request.addEventListener('readystatechange', onRequestReadyStateChange);
    // - - - - - - - - - -
})()