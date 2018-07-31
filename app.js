// get packages
const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// declare app
const app = express();
const router = express.Router({mergeParams: true});
const port = process.env.PORT || 8000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// define routes
const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');

// get routes
app.use('/clients', clientsRouter);
app.use('/', indexRouter);

// set the server to listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;