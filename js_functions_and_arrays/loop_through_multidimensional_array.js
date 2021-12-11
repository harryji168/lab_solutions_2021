const jj = [[2, 3, 4], ["Hello CodeCore", 1, true]];

function printMulti(arr) {
    for (let subArr of arr) {
        for (let elem of subArr) {
            console.log(elem);
        }
    }
}
printMulti(jj)

