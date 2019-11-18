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
    document.body.bgColor = "red";
    document.body.style.bgColor = "green";
    // doesn't work:
    // window.document.html.body.h1.innerText ="New Headline"

    // use selectors!
    let h1 = document.querySelector('h1');
    h1 = document.querySelector('#my-headline');
    h1 = document.getElementById('my-headline');

    h1.innerText = "A New Headline";
    // - - - - - - - - - -
}());