    // new way for modules
    // capsule, scope, collaborative
    import User, {
        Male,
        Female
    } from './components/user.js';

    // - - - - - - - - - -
    setTheme(title = 'module');

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

        // module block pattern
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

        // new way for modules
        // capsule, scope, collaborative
        // @see line 1:
        // import User, {
        //     Male,
        //     Female
        // } from './components/user.js';

        let john = new User('Doe', 'John', 'john@doe.org');
        log(john.prename);

        let ann = new Female('Doe', 'Ann', 'ann@doe.org');
        log(ann.prename)
        // - - - - - - - - - -
    }