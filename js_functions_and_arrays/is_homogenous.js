function isHomogenous(arr) {
    let type = typeof arr[0];
    if (type === 'object') {
        if (arr[0] === null) {
            type = 'null'
        } else if (Array.isArray(arr[0])) {
            type = 'array'
        }
    }
    for (const element of arr) {
        let elementType = typeof element;
        if (elementType === 'object') {
            if (element === null) {
                elementType = 'null'
            } else if (Array.isArray(element)) {
                elementType = 'array'
            }
        }
        if (elementType !== type) {
            return false;
        }
    }
    return true;
}

console.log(isHomogenous([1, 2, 3])) // true

console.log(isHomogenous(['a', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c'])) // true

console.log(isHomogenous([[2], 'Xavier'])) // false

console.log(isHomogenous([[2], { colour: 'blue' }])) // false

console.log(isHomogenous([1, '2', 3])) // false