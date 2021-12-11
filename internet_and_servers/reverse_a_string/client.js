const net = require('net');
const client = new net.Socket();
const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

client.on('data', data => {
    // get the data from the server side
    // log it 
    // end this process
    console.log(data + '');
    process.exit();
})

client.connect(4000, 'localhost', () => {
    interface.question('please input something to reverse: ', input => {
        // input is the user's input
        client.write(input);
    })
})