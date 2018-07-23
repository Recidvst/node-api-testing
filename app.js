const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;

// define routes
const indexRouter = require('./routes/index');
const clientsRouter = require('./routes/clients');
// get routes
app.use('/clients', clientsRouter);
app.use('/', indexRouter);
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;