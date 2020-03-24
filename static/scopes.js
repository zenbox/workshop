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
    var a = 42;
    let b = 108;

    log(a);
    log(b);

    // - - - - - - - - - -
}
