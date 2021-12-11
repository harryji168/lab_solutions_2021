const fs = require("fs");

function writeFile(filename, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, content, err => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}

writeFile('file.txt', "The contents of my file")
    .then(function () { console.log("File write complete!") })
    .catch(function (error) { console.error(error) })