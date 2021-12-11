class SubstitutionCipher {
    constructor(alphabet, cipher) {
        // this.alphabet
        this.code = {};
        this.codeOpposite = {};
        for (let i = 0; i < alphabet.length; i++) {
            this.code[alphabet[i]] = cipher[i];
        }
        for (let x = 0; x < alphabet.length; x++) {
            this.codeOpposite[cipher[x]] = alphabet[x];
        }
    }
    encode(str) {
        let result = '';
        for (const item of str) {
            if (this.code[item]) {
                result += this.code[item];
            } else {
                result += item;
            }
        }
        return result;
    }
    decode(str) {
        let result = '';
        for (const item of str) {
            if (this.codeOpposite[item]) {
                result += this.codeOpposite[item];
            } else {
                result += item;
            }
        }
        return result;
    }
}
let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc"));
// => "eta"
console.log(sub.encode("xyz"));
// => "qxz"
console.log(sub.encode("aeiou"));
// => "eirfg"
console.log(sub.decode("eta"));
// => "abc"
console.log(sub.decode("qxz"));
// => "xyz"
console.log(sub.decode("eirfg"));
// => "aeiou"