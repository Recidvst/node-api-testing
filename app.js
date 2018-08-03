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
const CONFIG = require('./config');

// declare app
const app = express();
const router = express.Router({mergeParams: true});
const port = process.env.PORT || CONFIG.port;

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
const clientsRouter = require('./routes/clients');

// get routes
app.use('/clients', clientsRouter);
app.use('/', indexRouter);

// set the server to listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;