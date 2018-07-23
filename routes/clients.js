const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

const Client = require('../models/clientsModel')

router.get('/', (request, response) => {
    response.json('clients');
});
module.exports = router;