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
setTheme(title = 'Begrüßung');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    
    let a = "Guten Morgen";
    log(a);

    // - - - - - - - - - -
}
