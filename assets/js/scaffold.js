!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -
    var a, b, c; // Function globals

    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _double(a) {
        var _a = a || 0;

        if (typeof (_a) !== 'number') return NaN;

        return _a + _a;
    };

    function _main() {
        // publish module and a function
        window.module = window.module || {};
        window.module.double = _double;
    }

    // - - - - -
    // CONTROL
    // - - - - -
    window.onload = function () {
        _main();
    }
    // - - - - - - - - - -
}())

var d = 1024;
$(document).ready(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    var functionGlobals;
    // METHODS
    function main() {}
    // CONTROL
    main();
    // - - - - - - - - - -
});

// document.addEventListener('readystatechange', function () {
//     console.log(document.readyState);

//     switch (document.readyState) { 
//         case 'complete':
//             callback()
//             break;
//     }
//  })