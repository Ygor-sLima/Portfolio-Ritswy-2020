const axios = require('axios');
const knex = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.params;
        let data;
        await axios.get(`http://www.omdbapi.com/?apikey=e6a338cb&i=${id}`)
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
        
        const movie = await knex('movies').insert(movieData);

        return response.json({
            movie,
            message: "Okay",
        });
    },

    async index(request, response) {
        const { s, y, page } = request.query;
        let data;
        await axios.get(`http://www.omdbapi.com/?apikey=e6a338cb&s=${s}&y=${y}&type=movie&page=${page}`)
        .then(function (response) {
            data = response.data;
        })
        return response.json({data, message: "Ok"});
    }
}