// docblock comment
import fs, { watchFile } from "fs";
import path from "path";
import util from "util";

// fs.open()
// a -> append to an existing file or create a new file
// w -> write in a new file
// r -> read only

function writeFileSync() {
    fs.openSync("example.txt", "a", (error, fileHandle) => {
        if (error) {
            throw error;
        }

        let textline = "Lorem ipsum dolor sit amet ...\n",
            lineBuffer = Buffer.from(textline);

        fs.writeSync(fileHandle, lineBuffer, 0, lineBuffer.length, () => {
            console.log("file written");
            fs.close(fileHandle);
        });
    });
}

setInterval(() => writeFile(), 5000);

fs.watch("example.txt", (type, filename) => {
    console.log(type);
    console.log(filename);
});

fs.readFileSync("example.txt", (error, data) => {
    console.log(data);
    console.log(data.toString("utf-8"));

    let text = data.toString("utf-8");
});
