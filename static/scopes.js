


/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable no-undef */

window.title = '';
window.subtitle = '';

function setTheme(t = undefined) {
    let title = t;
    if (title)
        themes[title] = localStorage.getItem(title) || false;
}
let themes = {};


// - - - - - - - - - -
setTheme(title = 'scopes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    var old = true;

    // window.i !!
    for (var i = 0; i < 10; i++) { 
        // console.log(i);
    }

    // Control block scoped!
    let a = 42;
    log(a);

    // - - - - - - - - - -
}

// - - - - - - - - - -
setTheme(title = 'constants');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // for number, string, boolean
    const PI = 3.1415;
    const TRUE = true;
    const string = "any fixed text";

    // ! error
    // PI = 2;

    // for objects and array
    const obj = {key : "value"};

    obj['new_key'] = "new value";
    console.log(obj);

    // node code example
    // const http = require('http');

    // ! error
    // obj = [];

    // - - - - - - - - - -
}