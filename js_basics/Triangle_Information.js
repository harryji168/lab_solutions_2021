let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);
let p = a + b + c;
let s = p / 2
let area = Math.sqrt((s - a) * (s - b) * (s - c) * s)
if (a + b > c && a + c > b && b + c > a) {
    console.log(`Perimeter = ${p} Area = ${area}`)
} else {
    console.log('Impossible triangle!')
}