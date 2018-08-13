const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
// mongoose.set('debug', true);
const bookSchema = require('../models/booksModel');


// GET ALL ( GET )
router.get('/', verifyToken, (request, response, next) => {
    mongoose.model( 'Book' ).find( {}, function(err, books) {
        if (err) response.send(err);
        response.status(200).json(books);
    });
});

// GET ONE ( GET )
router.get('/:book', verifyToken, (request, response, next) => {
    let bookSlug = decodeURI(request.params.book);
    mongoose.model( 'Book' ).find( {slug:bookSlug}, function(err, book) {
        console.log(book);
        if (err) response.send(err);
        response.status(200).json(book);
    });
});

// REMOVE ONE ( DELETE )
router.delete('/:book', verifyToken, (request, response, next) => {
    let bookSlug = decodeURI(request.params.book);
    mongoose.model( 'Book' ).findOneAndRemove( {slug:bookSlug}, function(err, book) {
        if (err) response.send(err);
        response.status(200).send(book);
    });
});

// ADD ONE ( POST )
router.post('/', verifyToken, (request, response, next) => {
    mongoose.model( 'Book' ).create( {
        title : request.body.title,
        slug : request.body.slug,
        author : request.body.author,
        publishYear : request.body.publishYear,
        description : request.body.description,
        language : request.body.language
    }, function(err, book) {
        if (err) response.send(err);
        response.status(200).send(book);
    });
});

// EDIT ONE ( PUT )
router.put('/:book', (request, response, next) => {
    let bookSlug = request.params.book;
    let updatedbook = {};
    for (let value in request.body) {
        updatedbook[value] = request.body[value];
    }
    mongoose.model( 'Book' ).findOneAndUpdate( {slug:bookSlug}, updatedbook, 
    function(err, book) {
        if (err) response.send(err);
        response.status(200).send(book);
    });
});

module.exports = router;