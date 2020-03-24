// Arrow functions

// - - - - - - - - - -
setTheme(title = 'arrow functions');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    let a = 42;

    document
        .querySelector('body')
        .addEventListener('click', event => {
            event.preventDefault();
            log('click');
        });


    (a) => {
        return a * 2;
    }


    // let b = function (a){return a*2;}
    let b = a => a * 2;
    log(b(2));

    let fn = (d, e) => d + e;
    log(fn(2, 3));


    // no this!
    document
        .querySelector('body')
        .addEventListener('click', function (event) {
            event.preventDefault();
            console.log(this);
        });

    document
        .querySelector('body')
        .addEventListener('click', event => {
            event.preventDefault();
            console.log(this);
            log('click');
        });

    // - - - - - - - - - -
}


// - - - - - - - - - -
setTheme(title = 'default values');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // ES5 way
    function fn1(m) {
        let message = m || 'no message';
    }

    // ES6 way
    function fn(message = 'no message') {

        console.log(message);
    }

    fn();

    // - - - - - - - - - -
}