/** A Filesystem Example
 * 
 */
// Import
import fs from 'fs';
import path from 'path';
import util from 'util';

// Declaration
let logfileName = 'log.txt';

// Methods
function writeLogFile() {
    // 'a' = append, 'x' = new, 'w' = write
    fs.open(logfileName, 'a', (error, fileHandle) => {
        if (error) {
            throw error;
        }

        let
            now = new Date(),
            date = util.format('%d.%d.%d', now.getDate(), now.getMonth() + 1, now.getFullYear()),
            textLine = `${date} Lorem ipsum dolor sit amet\n`,
            lineBuffer = Buffer.from(textLine);

        fs.write(fileHandle, lineBuffer, 0, lineBuffer.length, () => {
            fs.close(fileHandle)
        });

    })
}

function onFileRead(error, data) {
    if (error) throw error;

    console.log('- - - - - - - - - - -');
    console.log(data);
    console.log('- - - - - - - - - - -');
    console.log(data.toString('utf-8', 0, data.length));
    console.log('- - - - - - - - - - -');
}

function onFileWatch(currentTime, previousTime) {
    console.log('- - - - - - - - - - -');
    console.log(currentTime.mtime); // Modified time
    console.log(previousTime.mtime);
    console.log('- - - - - - - - - - -');
}

// Control
writeLogFile();

// Read a file
fs.readFile(logfileName, onFileRead);

// Watch files
fs.watchFile(logfileName, onFileWatch);