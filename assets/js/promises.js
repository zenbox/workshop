/** Promises
 *
 * @package Webapplication
 * @module App
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    //- - - - - - - - - -

    function doSomething() {
        return new Promise(function (resolve, reject) {

            // - - - - - - - - - -
            if (Math.random() > 0.5) {
                resolve('SUCCESS!');
            } else {
                reject('ERROR!');
            }
            // - - - - - - - - - -

        });
    }

    function successCallback(result) {
        console.log('success:', result);
    }

    function errorCallback(error) {
        console.log('error:', error);
    }

    function alwaysCallback() {
        console.log('promise ready');
    }


    const promise = doSomething();
    promise
        .then(successCallback)
        .catch(errorCallback)
        .finally(alwaysCallback);
    //- - - - - - - - - -
}());