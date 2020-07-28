!(function () {
    'use strict';
    //- - - - - - - - - -

    setTheme(title = 'functions');
    // - - - - - - - - - -
    if (eval(themes[title])) {
        // - - - - - - - - - -

        function fnName() {
            console.log('fnName')
        }
        fnName();

        let fn = function () {
            console.log('fn');
        }
        fn();

        // Arrow function
        let arrFn = () => {
            console.log('arrFn')
        }
        arrFn();


        let domElement = document
            .querySelector('body')
            .addEventListener('click', (event) => event.target);

        let domElement2 = document
            .querySelector('body')
            .addEventListener('click', function (event) {

                this.a = 42; // === event.target.a = 42
                return event.target;
            });

        // Old way of default params
        /** Add two numbers ...
         *
         * @param {number} a contains any number
         * @param {number} b contains any number
         * @returns {number, boolean}
         */
        let fn3 = function (a, b) {
            let _a = a || 0;
            let _b = b || 0;

            // early exit: returns a boolean
            if (_a === undefined) return false;
            if (_b === undefined) return false;

            // returns a number
            return _a + _b;

        }


        // Default parameter:
        let fn2 = function (a, b = 0) {
            try {
                return a + b;
            } catch (error) {
                console.dir(error);
            }
        }
        console.log(fn2(42));

        // - - - - - - - - - -
    }
    //- - - - - - - - - -
}());
// - - - - - - - - - -