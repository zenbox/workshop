/** AJAX Request
 *
 *  @desc 
 *
 * @package Webapplication
 * @module Webbapplicartion
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-11-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    //- - - - - - - - - -
    // DECLARATION
    let
        proxy = 'https://cors-anywhere.herokuapp.com/',
        url = 'http://michaelreichart.de/api/login.php?email=michael@zenbox.de&password=topsecret&flag=true&method=get',
        method = 'get', // post, delete, update, put
        data = 'email=michael@zenbox.de&password=topsecret&flag=true&method=post',
        request = new XMLHttpRequest() || new ActiveXObject('');

    // FUNCTIONS
    function onReadyStateChange(event) {
        console.log(request.readyState);

        switch (request.readyState) {
            default:
                break;
            case 1:
                console.log(request);
                break;
            case 2:
                console.log(request);
                break;
            case 3:
                console.log(request);
                break;
            case 4:
                console.log(request);
                console.log(request.response);
                console.dir(JSON.parse(request.response));
                break;
        }
    }

    // CONTROLS
    request.addEventListener('readystatechange', onReadyStateChange);
    request.open(method, proxy + url);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(JSON.stringify(data)); // sending data with post requests only



    //- - - - - - - - - -
}())