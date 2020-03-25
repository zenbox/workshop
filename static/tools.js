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

{
    'use strict';

    var log = (...message) => {
        let line = '',
            style =
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
        // if (typeof message === 'undefined') return false;
        if (title) {
            line = '-'.repeat(title.length);

            console.log('');
            console.log(`%c${title.toUpperCase()}`, style);
            // console.log(`%c${line}`, style);
        }
        // console.log('is array:', Array.isArray(message));
        // console.log('type:', typeof message);

        // if (Array.isArray(message) === true) {
        //     console.log('array');
        // for (let i = 0; i < message.length; i += 1) {
        //     console.log(message[i]);
        // }
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
        // } else if (typeof message === 'object') {
        // } else {
        //     console.log(typeof message);
        //     console.log(message);
        // }
        // console.log(`%c${line}`, style);
    };

    window.log = log;
}