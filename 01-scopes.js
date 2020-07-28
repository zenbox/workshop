// IIFE - Immediate Invoked Function Expression
(function () {
    'use strict';
    // - - - - - - - - - -
    // hoisting!
    var i, a, b;
    // - - - - - - - - - -
    setTheme(title = 'scopes');
    // - - - - - - - - - -
    if (eval(themes[title])) {
        // - - - - - - - - - -
        let b = 108; // Control scope
        var a = 42; // Function scope

        const PI = 3.14159;

        const obj = {};
        const arr = [];
        const fn = function () {};

        const http = {
            key: 'value'
        };

        let t = "any text";
        t += 'more text';

        console.log(a);

        for (let i = 0; i < 10; i += 1) {
            log(i);
        }

        log(i);

        console.log(http);
        http.key = 'new value';
        console.log(http);

        // - - - - - - - - - -
    }

    // console.log(PI)
    // - - - - - - - - - -
}())


// - - - - - - - - - -
setTheme(title = 'comparison');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    log('0' == false);
    log('1' == true);
    log('1' === true);
    log('hello world' == false);
    log('                        ' == false);
    // - - - - - - - - - -
}
























