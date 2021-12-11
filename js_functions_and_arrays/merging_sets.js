function mergeSet(array1, array2) {
    arrayReturn = array1.concat(array2);
    for (let i = 0; i < arrayReturn.length; i++) {
        for (let j = i + 1; j < arrayReturn.length; j++) {
            if (arrayReturn[i] === arrayReturn[j]) {
                arrayReturn.splice(j, 1);
            }
        }
    }
    return arrayReturn;
}
let array1 = [1, 2, 3];

let array2 = [3, 4, 5];

console.log(mergeSet(array1, array2));