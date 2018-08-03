const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');

router.get('/', (request, response, next) => {
    response.send('Welcome to the Pixel Pixel client API');
});

module.exports = router;