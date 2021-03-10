/** A SIMPLE UI CONTROL
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-03-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// jQuery!
// $(window.document).ready(function () {
//     // - - - - - - - - - -
//     // DECLARATION
//     let hamburger = $('.hamburger'),
//         content = $('#content'),
//         className = 'content--aside-open';

//     // METHODS
//     function onHamburgerClick(event) {
//         content.toggleClass(className);
//     };

//     // EVENT CONTROL; CONTROL
//     hamburger.on('click', onHamburgerClick);
//     // - - - - - - - - - -
// });

// Vanilla JS!
window.addEventListener('load', function () {
    // - - - - - - - - - -
    // DECLARATION
    let
        hamburgerList = document.querySelectorAll('.hamburger'),
        hamburger = hamburgerList[0],
        content = document.querySelector('#content'),
        contentClassName = 'content--aside-open',
        hamburgerClassName = 'hamburger--close';

    // METHODS
    function onHamburgerClick(event) {
        content.classList.toggle(contentClassName);
        hamburger.classList.toggle(hamburgerClassName);
    };

    // EVENT CONTROL; CONTROL
    hamburger.addEventListener('click', onHamburgerClick)
    // - - - - - - - - - -
});

!(function () {
    'use strict';
    //- - - - - - - - - -
    // let aList = document.querySelectorAll('a[href]');
    // for (let i = 0; i < aList.length; i += 1) {
    //     aList[i].addEventListener('click', onAnchorClick);
    // }

    let anchorGroup = document.querySelector('nav');

    function onAnchorClick(event, data) {

        // stop the browser default action
        event.preventDefault();
        // stop the event propagation
        event.stopPropagation();
        event.stopImmediatePropagation();

        /*
        event = {
            type: 'click',
            timestamp : new Date(),
            target: this, // pointer to trigger DOM object
            ...
            preventDefault: function () { ... },
            stopProgagation: function () { ... }
        }
        */
        if (event.target.tagName === 'A') {
            /* do something */

            console.log('Javascript!');
            console.dir(event);

        }
    }

    anchorGroup.addEventListener('click', event => {
        let data;
        onAnchorClick(event, data);
    });
    //- - - - - - - - - -
    // jQuery's event delegation


    function onAnchorClickByJquery(event) {
        console.log('jQuery!');
        console.dir(event);
        console.log(event.data);
    };

    let data = {
        key: 'value'
    };

    $('nav')
        .on('click', 'a[href]', data, onAnchorClickByJquery);

}());