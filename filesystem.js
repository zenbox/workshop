/** A Simple Filesystem
 *
 *  @desc file open, write, close and watch
 *
 * @package Webapplication
 * @module filesystem
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

'use strict';

// - - - - - - - - - -
// Declarations
// - - - - - - - - - -
const fs = require('fs');
const path = require('path');
const util = require('util');

let
    filename = 'readme.md',
    logfile = 'log.txt';

// - - - - - - - - - -
// Functions
// - - - - - - - - - -
function onFileOpen(error, fileData) {

    if (error) throw error;

    console.log(fileData);
    console.log(fileData.toString())
};

function onFileWatch(currentTime, previousTime) {
    // currentTime.atime -> access time
    // currentTime.mtime -> modify time
    // currentTime.ctime -> current/create time

    console.log(`current time: ${currentTime.mtime}`);
    console.log(`previous time: ${previousTime.mtime}`);
};

function writeFile() {

    // a - append, in. new
    fs.open(logfile, 'a', function (error, fileHandle) {

        if (error) throw error;

        let
            fileData = 'Lorem ipsum dolor sit amet ...\n',
            logFileLine = getDateString() + ' ' + fileData,
            fileBuffer = new Buffer(logFileLine);

        fs.write(fileHandle, fileBuffer, 0, fileBuffer.length, null, function () {
            fs.close(fileHandle, function () {
                /* idle */
            });
        });

    });

}

function getDateString() {
    let now = new Date();

    console.log(now);

    // format the da as you like
    return util.format('log entry: %s-%s-%s, %s:%s:%s',
        now.getFullYear(),
        (now.getMonth() + 1), // index of month plus 1 = month's number
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    );
}

// - - - - - - - - - -
// Controls
// - - - - - - - - - -
fs.readFile(filename, onFileOpen);
fs.watchFile(logfile, onFileWatch);

writeFile();

// write to log every 3 seconds
setInterval(function () {
    writeFile();
}, 3000);