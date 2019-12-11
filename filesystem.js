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

// Declaration
const fs = require('fs');
const path = require('path');
const util = require('util');

let
    filename = 'readme.md',
    logfile = 'log.txt';

// Functions  
function onFileOpen(error, fileData) {

    if (error) throw error;

    console.log(fileData);
    console.log(fileData.toString())
};

function writeFile() {

    // a - append, in. new
    fs.open(logfile, 'a', function (error, fileHandle) {

        if (error) throw error;

        let
            fileData = 'Lorem ipsum dolor sit amet ...\n',
            fileBuffer = new Buffer(fileData);

        fs.write(fileHandle, fileBuffer, 0, fileBuffer.length, null, function () {
            fs.close(fileHandle, function () {
                /* idle */
            });
        });

    });

}

// Control
fs.readFile(filename, onFileOpen);
writeFile();