function isEven(num) {
    if (typeof (num) === "number") {
        return num & 1 ? false : true;
    } else {
        return "It's not a number!";
    }
}