function matchingSet(arrA, arrB) {
    let arrayAll = arrA.concat(arrB);
    let arrReturn = [];
    for (let i = 0; i < arrayAll.length; i++) {
        for (let j = i + 1; j < arrayAll.length; j++) {
            if (arrayAll[i] === arrayAll[j] && (!arrReturn.includes(arrayAll[j]))) {
                arrReturn.push(arrayAll[j]);
            }
        }
    }
    return arrReturn;
}
console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])) // [3, 4]