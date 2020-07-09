const axios = require('axios');
require('dotenv-safe').config();
const knex = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.params;
        let data;
        await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDBKey}&i=${id}`)
        .then(function (response) {
            data = response.data;
        });

        let ratings = '';
        data.Ratings.map(r => {
            if(r.Source == 'Rotten Tomatoes' || r.Source == 'Internet Movie Database')
            {
                ratings += `${r.Source}-${r.Value}:`;
            }
        })

        const movieData = {
            title: data.Title,
            idIMDb: data.imdbID,
            released: data.Released,
            runtime: data.Runtime,
            genre: data.Genre,
            director: data.Director,
            plot: data.Plot,
            poster: data.Poster,
            ratings
        }
        
        knex('movies').insert(movieData)
        .then( () => {
            return response.json({requisicao: true});
        })
        .catch( () => {
            return response.json({requisicao: false});
        });

    },

    async index(request, response) {
        const { s, y, page } = request.query;
        let data;
        await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDBKey}&s=${s}&y=${y}&type=movie&page=${page}`)
        .then(function (response) {
            data = response.data;
        })
        return response.json({data, requisicao: true});
    }
}