const express = require('express');
const router = express.Router({mergeParams: true});
// encryption
const jwt = require('jsonwebtoken');
const verifyToken = require('./auth');

router.get('/', verifyToken, (request, response, next) => {
    response.send('Example Node/Express REST API. Go to /books.');
});

module.exports = router;