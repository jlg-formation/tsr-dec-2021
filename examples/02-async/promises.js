const fs = require("fs");

fs.promises
  .readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return fs.promises.readFile(files[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
    return;
  });
