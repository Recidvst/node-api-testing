// get core
const express = require('express');
const db = require('./db');
// get middleware
const passport = require('passport');
const morgan = require('morgan')
const pretty = require('express-prettify');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// config/env
require('dotenv').config();

// declare app
const app = express();
const router = express.Router({mergeParams: true});
const port = ( process.env.NODE_ENV === 'production' ) ? process.env.PORT : 8000;

// middleware
app.use(passport.initialize());
app.use(morgan('combined'))
app.use(cors());
app.use(pretty({ always: true, spaces: 2 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// define routes
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

// get routes
app.use('/books', booksRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

// set the server listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// error handling?
process.on('uncaughtException', function (err) {
    console.error(err);
    console.error(err.stack);
});

module.exports = app;