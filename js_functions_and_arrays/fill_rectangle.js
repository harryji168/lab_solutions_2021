function fillRectangle(width, height, chr) {
    let arr = [];
    for (let x = 0; x < height; x++) {
        let temp = [];
        for (let y = 0; y < width; y++) {
            temp.push(chr);
        }
        arr.push(temp);
    }
    return arr;
}
function rectangleToString(arr) {
    let str = "";
    for (const x of arr) {
        for (const y of x) {
            str += y;
        }
        str += "\n";
    }
    str = str.slice(0, str.length - 1);
    return str;
}

console.log(fillRectangle(5, 3, "🔥"));
const str = rectangleToString(fillRectangle(5, 3, "🔥"));
console.log(str)