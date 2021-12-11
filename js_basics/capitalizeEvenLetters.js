let letters = process.argv[2];

letters = letters.split(' ').join('  ').toLocaleLowerCase();
let result = '';

for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
        result += letters[i];
    } else {
        result += letters[i].toLocaleUpperCase();
    }
}

console.log(result.split('  ').join(' '));
