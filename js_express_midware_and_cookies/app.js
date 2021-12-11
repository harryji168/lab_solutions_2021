const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const tasksRouter = require('./routes/tasks');
const userRouter = require('./routes/user')
const path = require('path');

const app = express();


app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use((request, response, next) => {
    response.locals.userName = '';
    const userName = request.cookies.userName;
    if (userName) {
        response.locals.userName = userName;
    }
    next();
});

app.get('/', function (request, response) {
    const language = request.cookies.language;
    const name = request.cookies.name;
    const greetings = {
        english: 'Hello',
        french: 'Bonjour',
        spanish: 'Hola'
    };
    let greeting;
    if (name && language) {
        greeting = `${greetings[language]}, ${name}`;
    }
    response.render('home', { greeting });
});

app.get('/preferred_language', function (request, response) {
    const selected = request.cookies.language;
    const name = request.cookies.name;
    const preferred_languages = {
        english: 'English',
        french: 'French',
        spanish: 'Spanish'
    };
    response.render('preferred_language', {
        preferred_languages,
        name,
        selected
    });
});


const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
app.post('/preferred_language', function (request, response) {
    const name = request.body.name;
    const language = request.body.language;
    response.cookie('name', name, {
        maxAge: COOKIE_MAX_AGE
    });
    response.cookie('language', language, {
        maxAge: COOKIE_MAX_AGE
    });
    response.redirect('/');
});

// Custom middleware
app.use((request, response, next) => {
    response.locals.userName = '';
    const todoList = request.cookies.todoList;
    response.locals.todoList = [];
    if (todoList) {
        // This initializes a variable called `todoList` which will be available to
        // all of the views. The variable `todoList` is assigned the value of the
        // `cookies.todoList` array
        response.locals.todoList = todoList;
    }

    // The middleware is finished. Go on to next middleware and/or route
    next();
});



app.use(tasksRouter);
app.use(userRouter)
const PORT = 5000;
const DOMAIN = 'localhost';
app.listen(PORT, DOMAIN, function () {
    console.log(`The server is running at http://${DOMAIN}:${PORT}`);
});