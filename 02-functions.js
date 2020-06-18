// - - - - - - - - - -
setTheme(title = 'functions');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    'use strict';

    function fnName() {
        log('fnName', this);
    }

    let fn = function () {
        log('fn', this);
    };

    let arrFn = () => {
        log('arrow function', this);
    }

    let obj = {
        fn: function () {
            log('obj fn', this)
        }
    }

    obj.fn();

    fnName();
    fn();
    arrFn();


    log(this)

    // function () { return result; }

    // (arg) => { return arg * 2 }

    // arg => arg * 2;

    // data = { ... };
    // d3.select('svg').append('rect').attr('width', function (d, i) {
    //     return d.width;
    // })
    // d3.select('svg').append('rect').attr('width', (d, i) => d.width * i)

    document.querySelector('body').addEventListener('click', (event) => {
        log(this);
    })
    // - - - - - - - - - -
}