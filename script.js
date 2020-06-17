import Person from './components/person.js';
const person = new Person();
// - - - - - - - - - -
setTheme(title = 'modules');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    // The old way
    // IIFE
    (function () {
        'use strict';
        // - - - - - - - - - -
        let a = 42;
        
        // module!
        window.jQuery = window.jQuery || {};
        window.jQuery.a = a;
        
        // - - - - - - - - - -
    }())



    // - - - - - - - - - -
}