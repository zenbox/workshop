/** Promises
 *
 * @package Webapplication
 * @module App
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    // - - - - - - - - - -
    function doSomething() {
        return new Promise((resolve, reject) => {
            console.log('Promise:');
            console.log("It is done.");
            // Succeed half of the time.
            
            if (Math.random() > .5) {
                resolve("SUCCESS!!!");
            } else {
                reject("FAILURE!!!");
            }
        })
    }

    function successCallback(result) {
        console.log("It succeeded with " + result);
    }

    function failureCallback(error) {
        console.log("It failed with " + error);
    }

    const promise = doSomething();
    promise.then(successCallback, failureCallback);
    // - - - - - - - - - -
}())