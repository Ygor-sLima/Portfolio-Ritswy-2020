const knex = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {username, email, senha} = request.body;
        
        const user = {
            username,
            email,
            senha
        };

        const idUser = await knex('users').insert(user);

        return response.json({
            idUser,
            user,
            message: "Okay",
        });
    },

    async show(request, response) {
        const {id} = request.params;

        const data = await knex('users')
            .where('id', id);

        return response.json(data);
    },

    async update(request, response) {
        const {username, senha} = request.body;
        const {id} = request.headers;

        knex('users')
            .where('id',id)
            .update({username, senha})
            .then(user => {
                knex('users')
                    .where('id', user)
                    .then(data => {
                        return response.json(data);
                    });
            });
        
    },

    async delete(request, response) {
        const {id} = request.headers;

        await knex('users')
            .where('id', id)
            .del()
            .then( () => {
                return response.json({Message: true})
            });
        
    }
}