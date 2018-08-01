const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const ClientSchema = require('../models/clientsModel');


// GET ALL ( GET )
router.get('/', (request, response, next) => {
    mongoose.model( 'Client' ).find( {}, function(err, clients) {
        if (err) response.send(err);
        response.status(200).json(clients);
    });
});

// GET ONE ( GET )
router.get('/:client', (request, response, next) => {
    let clientSlug = request.params.client;
    mongoose.model( 'Client' ).find( {slug:clientSlug}, function(err, client) {
        if (err) response.send(err);
        response.status(200).json(client);
    });
});

// REMOVE ONE ( DELETE )
router.delete('/:client', (request, response, next) => {
    let clientSlug = request.params.client;
    mongoose.model( 'Client' ).findOneAndRemove( {slug:clientSlug}, function(err, client) {
        if (err) response.send(err);
        response.status(200).send(client);
    });
});

// ADD ONE ( POST )
router.post('/', (request, response, next) => {
    mongoose.model( 'Client' ).create( {
        slug : request.body.slug,
        name : request.body.name,
        url : request.body.url,
        staging : request.body.staging,
        login : request.body.login,
        hosting : request.body.hosting,
        hostingurl : request.body.hostingurl,
        siteType : request.body.siteType,
        retained : request.body.retained,
        retainer : request.body.retainer,
    }, 
    function(err, client) {
        if (err) response.send(err);
        response.status(200).send(client);
    });
});

// EDIT ONE ( PUT )



module.exports = router;