/** Javascript Events
 *
 *  @desc lorem ipsum ....
 *
 * @package Webapplication
 * @module Events
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-01-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */

// JS
!(function () {
    'use strict';
    //- - - - - - - - - -
    // Declaration
    let
        anchors, onAnchorClick,
        selector = 'nav',
        context = 'main';

    // Functions
    onAnchorClick = function (event) {
        console.log(event.target.tagName);

        switch (event.target.tagName) {
            case 'A':
                console.log('anchor');
                ajax(event.target.href);
                break;
        }
    };

    function ajax(url) {

        let
            request = new XMLHttpRequest(),
            data = '';

        request.addEventListener('readystatechange', function (event) {
            switch (request.readyState) {
                case 0:
                    console.log('no request');
                    break;
                case 1:
                    console.log('request opened');
                    break;
                case 2:
                    console.log('request sent');
                    break;
                case 3:
                    console.log('response header');
                    if (request.status !== 200) { }
                    break;
                case 4:
                    console.log('response data & ready');
                    console.log(request.response);
                    break;
            }
        });

        request.open('get', url);
        request.send(data);


    }

    function init() {}

    function main() {
        // set event listener
        anchors = document.querySelectorAll(selector);

        for (let i = 0; i < anchors.length; i += 1) {
            anchors[i].addEventListener('click', onAnchorClick);
        }
    }

    // Control
    window.onload = function () {
        init();
        main();
    }
    //- - - - - - - - - -
}());



// function addMyEventListener(type, callback) { 
//     let _event = {};

//     _event.type = type;
//     _event.timestamp = new Date();
//     _event.which = 1;

//     callback(_event);
// }







// jQuery
// $(document).ready(function () {
$(function () {
    'use strict';
    //- - - - - - - - - -
    // Declaration
    let
        selector = 'nav',
        delegator = 'a[href]',
        context = 'main',
        request, onAjaxDone, onAjaxFail, onAjaxAlways;


    // Functions, i.e. event handler functions
    onAjaxDone = function (response) {
        console.log('ajax done!');
        $(context).append(response);
    };

    onAjaxFail = function () {
        console.log('ajax fail!');
    };

    onAjaxAlways = function () {
        console.log('ajax always!');
    };

    // set an eventlister
    // use event delegation
    $(selector).on('click', delegator, function (event) {
        // stop the browser event stack
        event.preventDefault();

        console.dir(event.target.href);

        // Load via AJAX
        request = $.ajax(event.target.href);

        request
            .done(onAjaxDone)
            .fail(onAjaxFail)
            .always(onAjaxAlways);

    });

    //- - - - - - - - - -    
});