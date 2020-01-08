// no global 'use strict', please!

// - - - - - - - - - -
// The IIFE - pattern
// - - - - - - - - - -
// Immediate Invoke Function Expression:
// a unary invoked function expression that answers a true
// function expression aka. lambda expression or lambda function
// - - - - - - - - - -
!(function () {}());
// - - - - - - - - - -

// a strict IIFE pattern
!(function () {
    // function scoped 'use strict'
    'use strict';
    // - - - - - - - - - -
    // Constant (ES 6+)
    const PI = 3.141592;
    // function scoped variable (ES 5)
    var a = 42;
    // function/control scoped variable (ES 6+)
    let b = 108;

    // wait for loading the document
    document.addEventListener('readystatechange', function (event) {
        console.log(document.readyState);

        if (document.readyState === 'interactive') console.log('still loading document ...');
        if (document.readyState === 'complete') console.log('document ready!');
    })

    // wait for loading the window
    // window.onload = function () {}
    window.addEventListener('load', function () {
        console.log('window ready')
    });
    // - - - - - - - - - -!
}());


// window.document
jQuery(document).ready(function () {
    'use strict';
    // - - - - - - - - - -
    console.log('- - - - -');

    let a, b, c, n, o, form;

    n = 42;
    // n = new Number(42);
    console.log(typeof n);
    console.log(n);

    o = {
        key: 'value',
        type: 'number'
    };
    console.log(typeof o);
    console.log(o);

    a = [true, "zwei", 3];
    console.log(typeof a);
    console.log(a);

    // Iterations
    form = document.querySelector('form');
    
    document.querySelector('#my-id'); // ONE object
    document.querySelectorAll('.my-class'); // a list with objects
    document.getElementById('my-id');
    document.getElementsByClassName('my-classt');
    
    // iteration as object
    for (let kiki in form) {
        console.log(kiki);
        //console.log(form[key]);
    }
    
    // iteration as array
    for (let i = 0; i < form.length; i += 1) { 
        console.log(i)
        console.log(form[i])
    }

    console.log('- - - - -');
    // - - - - - - - - - -
});