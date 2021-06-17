/** Filesystem Example
 *
 *  @desc 
 *
 * @package Webapplication
 * @module Filesystem
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-16
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
const fs = require('fs');
const path = require('path');
const util = require('util');

let filename = './../readme.md',
    logfile = 'log.txt';

function onFileRead(error, fileData) {

    if (error) throw error;

    // console.clear();
    console.log(fileData);
    console.log(fileData.toString('utf-8', 24, 50));
}

function onFileWatch(currentTime, previousTime) {
    console.log(currentTime.mtime, '   ',previousTime.mtime);
}

function writeMyFile() {
    // filehandle
    // a ->  append, x -> new, r -> read

    fs.open(logfile, 'a', (error, fileHandle) => {

        if (error) throw error;


        let fileData = 'Lorem ipsum dolor sit ...\n',
            logLine = `${getDate()} ${fileData}`,
            fileBuffer = Buffer.from(logLine);


        fs.write(fileHandle, fileBuffer, 0, fileBuffer.length, null, () => {
            fs.close(fileHandle);
        });

    });
}

function getDate() {
    let now = new Date(),
        formatted = util.format( '%s-%s-%s', now.getFullYear(), ('0' + (now.getMonth()+1)).slice(-2), now.getDate() );
    return formatted;
}

// Control
// write files (delete, update ...)
writeMyFile();


// read files  
fs.readFile(filename, onFileRead);

// watch files!
fs.watchFile(logfile, onFileWatch);



setInterval(() => writeMyFile(), 5000);