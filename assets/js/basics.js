/**
 * Module Block Pattern!
 * (IIFE - Immediate Invoked Function Expression)
 */
(function () {
    'use strict';
    // - - - - - - - - - -
    /**
     * JS Basics
     * @desc ...
     */
    var a = 42, // number
        b = 'value', //string
        document = undefined,
        c = true, // boolean
        arr = ['a', 'b'], // object (numerical indizes)
        obj = {}, // object (assotiative indizes)
        fn = function () {}; // function

    console.log(Array.isArray(arr));
    console.log(typeof arr);

    arr['abc'] = 'lalala';
    console.log(Array.isArray(arr));

    console.log(arr.length);

    // Iteration
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    for (var key in arr) { 
        console.log(key, arr[key])
    }

    obj = {
        "key": "value",
        "key 2": "value"
    }

    window.Spbim = window.Spbim || {};

    Spbim = {
        a: a,
        b: b
    };

    // - - - - - - - - - -
}());

console.dir(window);