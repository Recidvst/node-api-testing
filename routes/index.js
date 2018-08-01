const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');

router.get('/', (request, response, next) => {
    response.send('hello world');
});

module.exports = router;