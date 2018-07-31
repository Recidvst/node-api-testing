const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const ClientSchema = require('../models/clientsModel');

router.get('/', (request, response) => {
    response.send('hello world');
});

module.exports = router;