const express = require('express');
const db = require('./database');
const router = express.Router();

router.post('/', (request, response) => {
    return response.json({
        message: "Okay",
    });
});

module.exports = router;