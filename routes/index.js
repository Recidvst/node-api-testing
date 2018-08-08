const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (request, response, next) => {
    response.send('Example Node/Express REST API. Go to /books.');
});

module.exports = router;