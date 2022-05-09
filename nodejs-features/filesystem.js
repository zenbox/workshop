/** A Filesystem Example
 * 
 */

import fs from 'fs';
import path from 'path';
import util from 'util';

let logfileName = 'log.txt';

function writeLogFile() {
    fs.open(logfileName, 'a', (error, fileHandle) => {
        if (error) {
            throw error;
        }

        let
            textLine = 'Lorem ipsum dolor sit amet\n',
            lineBuffer = Buffer.from(textLine);

        fs.write(fileHandle, lineBuffer, 0, lineBuffer.length, () => {
            fs.close(fileHandle)
        });

    })
}

writeLogFile();