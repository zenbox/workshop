/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable no-undef */
{
    'use strict';
    var assert = (assertion = undefined, description = undefined) => {
        var
            line = '',
            prefix = 'assert for';
        if (typeof assertion === 'undefined') return false;
        if (title) {
            line = '-'.repeat(title.length + prefix.length);

            console.log('');
            console.log(prefix, title);
            console.log(description);
        }
        console.log(assertion);
        console.log(line);
    };

    window.assert = assert;
}
// - - - - - - - - - -
{
    window.title = '';
    window.subtitle = '';
    
    function setTheme(t = undefined) {
        let title = t;
        if (title)
        themes[title] = localStorage.getItem(title) || false;
    }
    window.themes = {};
}
// - - - - - - - - - -
{
    'use strict';
    let count = 1;

    var log = (...message) => {
        let style =
            'color: grey;' +
            'font-size: 8px;' +

            'margin-top: -20px;' +
            'margin-bottom: -20px;' +
            'margin-left: -20px;' +
            'margin-right: -20px;' +

            'padding-top: 0px;' +
            'padding-bottom: 0px;' +
            'padding-left: 5px;' +
            'padding-right: 5px;' +

            '';

        // console.clear();

        if (title) {
            console.log('');
            console.log(`%c(${count++}) ${title.toUpperCase()}`, style);
        }

        let i = 1;

        if (Array.isArray(message[i])) {
            let m = 'arr -> ';

            for (let j = 0; j < message[i].length; j++) {
                m += message[i][j] + ' ';
            }
            console.log(m)
        } else {

            for (let key in message) {
                console.log(`${message[key]}`);
            }
        }
    };

    window.log = log;
}