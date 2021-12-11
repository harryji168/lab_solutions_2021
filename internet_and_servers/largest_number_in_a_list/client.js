// get a string => typed by the user => use readline
// send this string to the server side
// wait the response of the server side
// log the response => max number

const net = require('net');

const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const client = new net.Socket();

client.on('data', data => {
    // get the data from the server side
    // log it 
    // end this process
    console.log(data + '');
    process.exit();
})

client.connect(4000, 'localhost', () => {
    interface.question('please input a number list: ', input => {
        // input is the user's input
        client.write(input);
    })
})