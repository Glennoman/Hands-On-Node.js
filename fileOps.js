const fs = require("fs");
const path = require("path");

// Filepaths
const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Read to input file
const modifiedFiles = () => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading the file", err);
      return;
    }

    // append date and time
    const currentDateTime = new Date().toLocaleString();
    const modifiedContent = `${data}\nAppended on: ${currentDateTime}`;

    // write modifed content to output file
    fs.writeFile(outputFilePath, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file", err);
        return;
      }

      //print succes message
      console.log("Content successfully written to output.txt");
    });
  });
};

modifiedFiles();
