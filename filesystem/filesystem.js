/** A Filesystem Example
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-22
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Node modules
const fs = require('fs');
const path = require('path');
const util = require('util');

let logFileName = 'logfile.txt';

// Methods
// Filehandle flags:
// a -> append (new, if not exists)
// w -> write always a new file
// r -> read only
function writeLogFile() {
    fs.open(logFileName, 'a', (error, fileHandle) => {

        if (error) throw error;

        let textline = `${getFormattedDate()} Lorem ipsum dolor sit ...\n`,
            lineBuffer = Buffer.from(textline);


        fs.write(fileHandle, lineBuffer, 0, lineBuffer.length, () => {
            fs.close(fileHandle)
        });

    });
}

function getFormattedDate() {
    let now = new Date(),
        formattedDate = util.format('%s-%s-%s %s:%s:%s', now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

    return formattedDate;
}


// Control
// Write a file
writeLogFile();

setInterval(() => {
    writeLogFile();
}, 20000);