!(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -


    // - - - - -
    // FUNCTIONS
    // - - - - -
    function _double(a) {
        var _a = a || 0;

        if (typeof (_a) !== 'number') return NaN;

        return _a + _a;
    };

    // i.e. Event control
    function _init() {
        // Eventlistener
        let collection = document.querySelectorAll('a[href]');

        for (let i = 0; i < collection.length; i += 1) {
            collection[i].addEventListener('click', function (event) {
                /* do something */
            })
        }

        document.body.addEventListener('click', function (event) {
            let triggerElement = event.target;
            if (triggerElement.tagName === 'A') {}
        });

        $('a[href]').on('click', function (event) {
            /* do something ... */
        })
    }

    function _main() {
        window.onload = function () {
            _init();
            // publish module and a function
            window.module = window.module || {};
            window.module.double = _double;
        }
    }


    // - - - - -
    // CONTROL
    // - - - - -
    _main();
    // - - - - - - - - - -
}())






addItem(title) {
    this.store.insert({
        id: Date.now(),
        title,
        completed: false
    }, () => {
        this.view.clearNewTodo();
        this._filter(true);
    });
}



function addItem(title){ 
    this.store.insert({}, function (this) { let that = this; ... } )
}



let a = 42;
"\"text\""
1 + 2 + 'text ' + a + ' <p class="' + className + '">mehr text</p>' // 3text 42 mehr text
    
`${1+2} text ${a} mehr text `



import {$on} from './helpers';