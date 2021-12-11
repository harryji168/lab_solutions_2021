// - It will take a temperature in Fahrenheit from the url params.
// (e.g. given "http://localhost:8080/?temp=100" takes 100)

// - It will convert that temperature to Celsius and display it in browser.

const http = require('http');
// url.parse is deprecated
// const url = require('url');

const server = http.createServer((request, response) => {
    // get the params from the url 
    // (e.g. given "http://localhost:8080/?temp=100" takes 100)
    // convert it to Celsius temperature
    // put the result into the browser

    // url.parse is deprecated
    // const params = url.parse(request.url, true).query;
    // const f = parseFloat(params.temp);

    const params = new URL(request.url, 'http://localhost:8080/');
    const f = parseFloat(params.searchParams.get('temp'));

    const c = (f - 32) * 5 / 9;
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Temp Convertor</title>
        </head>
        <body>
            <h1>Convert ${f} into ${c}</h1>
        </body>
    </html>
    `)
    response.end();
});

server.listen(8080);
console.log('this server is listening on 8080')
