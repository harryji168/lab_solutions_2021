function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("hello") // "olleh"
reverseString("nor") //"ron"
reverseString("codecore") // "erocedoc"