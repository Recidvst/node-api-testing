const express = require('express');
var router = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const ClientSchema = require('../models/clientsModel');

// get one
router.get('/:client', (request, response) => {
    console.log(request.params.client);
    let clientSlug = request.params.client;
    mongoose.model( 'Clients' ).find( {slug:clientSlug}, function(err, client) {
        if (err)
            response.send(err);
        response.json(client);
    });
});

// get all
router.get('/', (request, response) => {
    mongoose.model( 'Clients' ).find( {}, function(err, clients) {
        if (err)
            response.send(err);
        response.json(clients);
    });
});

module.exports = router;