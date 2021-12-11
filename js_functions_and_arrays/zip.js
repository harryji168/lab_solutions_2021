function zip(arrA, arrB) {
    if (arrA.length == arrB.length) {
        let arrReturn = [];
        for (let index = 0; index < arrA.length; index++) {
            arrReturn.push([arrA[index], arrB[index]]);
        }
        return arrReturn;
    } else {
        return undefined;
    }
}
console.log(zip([1, 2, 3], [4, 5, 6]))