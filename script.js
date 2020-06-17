// - - - - - - - - - -
setTheme(title = 'scopes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    var a = 42.3,
        i;
    let b = 108;

    const PI = 3.1415;

    const obj = {};
    const arr = [];
    const fn = function () {};


    log(typeof fn);
    log(typeof obj);
    log(typeof arr);
    log(typeof a);


    log(21 - '1');



    obj.member = 512;
    console.log(obj)


    log('window.a:', window.a);
    log('window.b:', window.b);
    log('outer > a,b', a, b);

    // for (let i = 0; i < 10; i += 1) {
    //     log(i);
    // }

    function ownFunction() {
        if (true) {
            var a = 43;
            let b = 109;
        }
        log('inner > a,b', a, b);
    }

    ownFunction();
    // - - - - - - - - - -
}




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
        fn: function () { log('obj fn', this)}
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

    document.querySelector('body').addEventListener('click',  (event) => {
        log( this );
    })
    // - - - - - - - - - -
}