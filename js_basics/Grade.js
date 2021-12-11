const grade = parseInt(process.argv[2]);

if (grade >= 0 && grade <= 100) {
    if (grade >= 80 && grade <= 100) {
        console.log('A');
    } else if (grade >= 70 && grade <= 79) {
        console.log('B');
    } else if (grade >= 60 && grade <= 69) {
        console.log('C');
    } else if (grade >= 50 && grade <= 59) {
        console.log('D');
    } else {
        console.log('F');
    }
} else {
    console.log('Invalid grade');
}