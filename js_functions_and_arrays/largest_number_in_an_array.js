function largestNumber(array) {
    let largest = array[0];
    for (let number of array) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}
// function largestNumber(array) {
//     let array1 = array.sort();
//     return array1[array1.length - 1];
// }
console.log(largestNumber([99, 77, 55, 33, 22, 11]));
console.log(largestNumber([40, 2, 13, 34, 42]))  // returns 42

console.log(largestNumber([1, 2, 3, 4, 5, 6]))// returns 6

console.log(largestNumber([99, 77, 55, 33, 22, 11])) // returns 99