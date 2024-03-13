const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (error, data) => {
//   console.log(error, data);
// });

// const a = fs.readFileSync("file.txt", "utf-8");
// console.log(a);
// console.log("Finished File");

// fs.writeFile("file2.txt", "This is a new file", () => {
//   console.log("written to file");
// });

const a = fs.writeFileSync("file3.txt", "this is a newdata");
console.log(a);
console.log("Finished File Writing ");
