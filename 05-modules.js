import Person from './components/person.js';


// - - - - - - - - - -
setTheme(title = 'modules');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    // The old way
    // IIFE as Module-Block-Pattern
    (function () {
        'use strict';
        // - - - - - - - - - -
        let _a = 42;

        // module!
        window.jQuery = window.$ = window.jQuery || {};
        window.jQuery.a = _a;

        // - - - - - - - - - -
    }())



    // - - - - - - - - - -
}