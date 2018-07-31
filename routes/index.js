const express = require('express');
var cors = require('cors')
const router = express.Router();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const ClientSchema = require('../models/clientsModel');

router.get('/', (request, response, next) => {
    response.send('hello world');
});

module.exports = router;