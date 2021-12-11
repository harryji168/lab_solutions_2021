const fs = require('fs');

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data);
        })
    })
}
function readdir(pathName) {
    return new Promise((resolve, reject) => {
        fs.readdir(pathName, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
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

// get all the filenames 
// loop this array => pass every element of this array which is the filename to readFile function
// then we can get all the content
// combine the content together into a string => put it to a new file by using writeFile function

// Promise.all



//chain
readdir('./contents').then(fileNames => {
    const promiseArr = [];
    fileNames.forEach(element => {
        promiseArr.push(readFile(`./contents/${element}`))
    });
    return Promise.all(promiseArr)
    // return Promise.all(fileNames.map(fileName => readFile(`./contents/${fileName}`)))
}).then(data => {
    const result = data.join('\n');
    return writeFile('file.txt', result)
}).then(() => {
    console.log('completed!');
})














