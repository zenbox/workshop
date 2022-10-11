import fs from "fs";
import path from "path";
import util from "util";

// fs.open()
//  a -> append to an existing or create a new file
//  w -> write always in a new file
//  x -> ?
//  r -> read only

function writeFile() {
  fs.open("example.txt", "a", (error, fileHandle) => {
    if (error) throw error;

    let textline = "Lorem ipsum dolor sit amet ...\n",
      lineBuffer = Buffer.from(textline);

    fs.write(fileHandle, lineBuffer, 0, lineBuffer.length, () => {
      fs.close(fileHandle);
    });
  });
}

setInterval(writeFile, 5000);

fs.watch("example.txt", (type, filename) => {
  console.log(type);
  console.log(filename);

  console.log("something changed ...");
});

fs.readFile("example.txt", (error, data) => {
  if (error) throw error;

  console.log(data);
  console.log(data.toString("utf-8"));
});
