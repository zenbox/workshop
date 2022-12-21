// A simple filesystem example

import fs from "fs";
import path from "path";

fs.readFile(path.resolve("./static/data/data.csv"), (error, buffer) => {
    if (error) {
        throw error;
    }
    let csv = buffer.toString("utf-8"); // Buffer!

    let lines = csv.split("\n"),
        index = 0,
        keys = [],
        data = []; // Empty array!

    lines.forEach((line) => {
        if (index === 0) {
            keys = line.split(",");
            console.log(keys);
        } else {
            let values = line.split(",");
            data[index] = {}; // Each array lin is an empty object
            for (let i = 0; i < keys.length; i++) {
                data[index][keys[i]] = values[i].trim();
            }
        }
        index++;
    });
    // Cut the first array entry
    data.shift();
    console.log(data);
});

function writeFile() {
    // a => append (if exists, else create a new one)
    // w => write (overwrites!)
    // x => ...
    fs.open("logfile.txt", "a", (error, fileHandle) => {
        if (error) throw error;

        let line = `Its a log entry from ${new Date().getTime()}\n`,
            buffer = Buffer.from(line);

        fs.write(fileHandle, buffer, 0, buffer.length, () => {
            fs.close(fileHandle);
        });
    });
}

// a kind of cron job
setInterval(writeFile, 5000);

// Watch a file as an event listener
fs.watch("./", (type, filename) => {
    console.log(type);
    console.log(filename);
});
