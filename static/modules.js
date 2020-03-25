// - - - - - - - - - -
setTheme(title = 'modules');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // old way
    // IIFE Pattern
    !(function () {
        'use strict'
        // - - - - - - - - - -
        var a = 42;
        log('works!');
        // - - - - - - - - - -
    }());

    ! function () {
        log('works too!');
    }();

    +
    function () {
        log('works too!');
    }();

    // module block pattern?
    !(function () {
        'use strict'
        // - - - - - - - - - -
        var _a = 42;
        log('works!');

        window.myModule = window.myModule || {};
        window.myModule.a = _a;

        // - - - - - - - - - -
    }());

    !(function (module) {
        'use strict'
        // - - - - - - - - - -
        var b = module.a;
        log('works!');

        window.myModule = window.myModule || {};
        // - - - - - - - - - -
    }(window.myModule));

    // - - - - - - - - - -
}

// $(document).ready(function(){
// 'use strict';
//  - - - - - - - - - - -
//  - - - - - - - - - - -
// });

// new way for modules
// capsule, scope, collaborative
import User, {
    Male,
    Female
} from './components/user.js';

let john = new User('Doe', 'John', 'john@doe.org');
log(john.prename);

let ann = new Female('Doe', 'Ann', 'ann@doe.org');
log(ann.prename)