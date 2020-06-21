const axios = require('axios');
const knex = require('../database/connection');

module.exports = {
    async show(request, response) {
        const {id} = request.params;
        
        const movie = await knex('movies')
            .where('id', id);

        return response.json({
            movie,
            message: "Okay",
        });
    },

    async index(request, response) {
        const data = await knex('movies')
            .select('id','title','poster');

        return response.json(data);
    }
}