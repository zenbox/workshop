/** FILESYSTEM EXAMPLE
 *
 * @desc File access
 *
 * @package Webapplication
 * @module FS
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.1325
 * @since 2025-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import fs from "node:fs";
import path from "node:path";

// Reading files
const file = path.join("./public/assets/data/", "data.csv");

fs.readFile(file, "utf-8", (err, buffer) => {
    if (err) throw err;

    // console.log(buffer); // usually hex - formatted
    // console.log(buffer.toString()); // converts to readable text
    // console.log(typeof buffer);

    let csv = buffer.toString();

    let lines = [];
    let keys = [];
    let data = [];

    // split by line break
    lines = csv.split("\n");

    lines.forEach((line, index) => {
        if (index === 0) {
            keys = line.split(",");
        } else {
            data.push(line.split(","));
        }
    });

    // console.log(keys);
    // console.log(data);
});

// Write data

// 1. file handle
// methods to open: a, w, x
// a: append - create new file or open an existing and append
// w: write  - create always a new file
// x: expand - open an existing and append
let index = 3;
fs.open("./public/assets/data/data.csv", "a", (err, fileHandle) => {
    if (err) throw err;

    let line = `\n${++index}, lorem, black`;
    let buffer = Buffer.from(line); // convert to fs hex code

    // 2. file writer
    fs.write(fileHandle, buffer, 0, buffer.length, null, (err) => {
        if (err) throw err;

        console.log("file written");

        fs.close(fileHandle, (err) => {
            if (err) throw err;

            console.log("fileHandle closed");
        });
    });
});

// Watch files and directories
fs.watch("./public/assets/data/data.csv", (event, filename) => {
    console.log(filename);
    console.dir(event);
});

fs.watch("./public/", (event, filename) => {
    console.log(filename);
    console.dir(event);
});
