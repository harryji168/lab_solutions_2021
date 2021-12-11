function findDuplicates(arr) {
    let arrReturn = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && (!arrReturn.includes(arr[j]))) {
                arrReturn.push(arr[j]);
            }
        }
    }
    return arrReturn;
}
console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]))
// returns [1, 9]
