/** Dom Manipulation Examples
 *
 *  @desc creating and modifying elements ant attributes  
 *
 * @package Webapplication
 * @module dom
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-11-18
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION / INITIALISATION

    // FUNCTIONS

    // CONTROL (EVENT CONTROL)
    console.clear();
    console.log(window);
    console.log(window.navigator.userAgent);
    console.log(window.navigator.appVersion);
    console.log(window.document);

    // better as object with console.dir!
    console.dir(document);
    document.body.bgColor = "white";
    document.body.style.bgColor = "green";
    // doesn't work:
    // window.document.html.body.h1.innerText ="New Headline"

    // use selectors!
    let h1 = document.querySelector('h1');
    let arr = document.querySelectorAll('h1');

    // using an ID
    h1 = document.querySelector('#my-headline');
    h1 = document.getElementById('my-headline');

    // modify an object
    h1.innerText = "A New Headline";

    // modify an array of objects
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].innerText = "A Very New Headline";
    }

    // see object
    console.log(h1);
    console.dir(h1);


    // other selector commands
    document.querySelector('h1');
    document.querySelectorAll('.teaser');

    document.getElementById('my-headline');
    document.getElementsByName('p');

    let arrByClasses = document.getElementsByClassName('teaser');
    console.log(arrByClasses.length);


    // creating elements
    let list = document.createElement('ul');

    // creating text nodes
    let text = document.createTextNode('hello world!');

    // append elements to the DOM
    document.body.appendChild(list);

    // set attributes
    list.setAttribute('class', 'navigation');

    let navArray = [
        ["Home", "index.html"],
        ["Work", "work.html"],
        ["Contact", "contact.html"],
        ["Imprint", "imprint.html"]
    ];
 
    for (let i = 0; i < navArray.length; i++) {
        const element = navArray[i];
        console.log(element[1]);
    }









    // - - - - - - - - - -
}());