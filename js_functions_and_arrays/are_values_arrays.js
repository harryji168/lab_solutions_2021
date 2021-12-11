function areValuesArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!Array.isArray(element)) {
            return false;
        }
    }
    return true;
}

areValuesArrays([[1], [2], [4, 5]]); // returns true

areValuesArrays([1, [2], [6, 7, 8]]); // returns false

areValuesArrays([[1], 2, [6, 7, 8]]); // returns false

areValuesArrays(['true', 'false']); // returns false
