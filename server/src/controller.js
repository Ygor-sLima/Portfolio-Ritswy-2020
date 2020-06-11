const express = require('express');
const db = require('./database');
const router = express.Router();
const axios = require('axios');

router.post('/movies/:id', (request, response) => {
    return response.json({
        message: "Okay",
    });
});

router.get('/movies', async (request, response) => {
    const { s, y, page } = request.query;
    let data;
    await axios.get(`http://www.omdbapi.com/?apikey=e6a338cb&s=${s}&y=${y}&type=movie&page=${page}`)
    .then(function (response) {
        data = response.data;
    })
    return response.json({data, message: "Ok"});
});

module.exports = router;