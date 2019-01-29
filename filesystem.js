/**
 * simple filesystem handling
 * @author Michael
 * @version 1.0.0
 * @since 2019/01/29
 */

'use strict';
// declarations
const fs = require('fs');
const util = require('util');

let
    filename = 'README.md',
    logFile = 'log.txt',

    getDateString = undefined,
    onReadFile = undefined,
    onWriteFile = undefined;

// methods
getDateString = function () {
    let now = new Date();

    return util.format(
        'any string %s-%s-%s',
        now.getFullYear(),
        (now.getMonth() + 1),
        now.getDate()
    );
}

onReadFile = function (error, buffer) {
    if (error) {
        throw error;
    }
    console.log(buffer.toString());
}

onWriteFile = function (filename) {

    let
        string,
        buffer;

    fs.open(filename, 'a', function (error, handle) {
        if (error) {
            throw error;
        }

        // some content
        string = getDateString() + ' Lorem ipsum ...\n';

        // string to buffer
        buffer = Buffer.from(string);

        // write buffer into a file
        fs.write(handle, buffer, 0, buffer.length, null, function () {
            fs.close(handle, function () {
                return true;
            });
        });
    })
}

// control
//fs.readFile(filename, onReadFile);

setInterval(function () {
    onWriteFile(logFile);
}, 4000);

fs.watchFile(logFile, function (currentTime, previousTime) {
    // atime -> access time
    // mtime -> modifiy time
    // ctime -> current time
    console.log('current time: ' + currentTime.mtime)
    console.log('previous time: ' + previousTime.mtime)
});