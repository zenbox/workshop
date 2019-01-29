/**
 * a better logger
 */

'use strict';

class Log {
    constructor() {
        this.string = undefined;
        this.object = undefined;
        this.prefix = 'LOGGER says';
        this.suffix = '- - - - - - - - - -';
    }

    asString(string) {
        this.string = string || 'no message';

        console.log(this.prefix);
        console.log(this.string);
        console.log(this.suffix);
    }

    asObject(object) {
        this.object = object || {};
        let array = [];
        for (let key in this.object) {
            array.push(key);
        }
        array.sort();
        for (let i = 0, len = array.length; i < len; i += 1) {
            console.log(array[i]);
        }

    }

}



// let Log = undefined;

// Log = function () {
//     this.string = undefined;
//     this.object = undefined;
//     this.prefix = 'LOGGER says';
//     this.suffix = '- - - - - - - - - -';
// }

// Log.prototype.asString = function (string) {
//     this.string = string || 'no message';

//     console.log(this.prefix);
//     console.log(this.string);
//     console.log(this.suffix);

// }

// Log.prototype.asObject = function (object) {
//     this.object = object || {};
//     let array = [];
//     for (let key in this.object) {
//         array.push(key);
//     }
//     array.sort();
//     for (let i = 0, len = array.length; i < len; i += 1) {
//         console.log(array[i]);
//     }

// }

// propagation
module.exports = new Log();