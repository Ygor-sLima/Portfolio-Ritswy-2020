const knex = require('../database/connection');

module.exports = {
    async show(request, response) {
        const {email, senha} = request.body;
        
        const data = await knex('users')
            .where('email', email);

        if( senha == data[0].senha )
        {
            return response.json({
                id: data[0].id,
                requisicao: true,
            });
        }
        else {
            return response.json({
                requisicao: false,
                message: 'Email ou senha não confere'
            })
        }
    }
} 