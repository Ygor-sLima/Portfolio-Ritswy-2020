const knex = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {username, email, senha} = request.body;
        const user = {
            username,
            email,
            senha
        };
        
        //Verificando se o email já foi cadastrado
        const thereIsEmail = await knex('users')
            .where('email', email);
        if( thereIsEmail.length > 0 ) {
            //Enviando resposta
            return response.json({
                requisicao: false,
                message: "Email já cadastrado"
            })
        }

        //Se o email não está cadastrado
        //Insere os usuarios
        await knex('users')
            .insert(user)
            .then( () => {
                return response.json({
                    requisicao: true
                });
            });

    },

    async show(request, response) {
        const {id} = request.params;

        const data = await knex('users')
            .where('id', id)
            .select('username');
        return response.json(data);
    },

    async update(request, response) {
        const {username} = request.body;
        const {id} = request.headers;

        knex('users')
            .where('id', id)
            .update({username})
            .then(user => {
                knex('users')
                    .where('id', id)
                    .then(data => {
                        return response.json({requisicao: true});
                    });
            });
        return response.json({requisicao: false});
    },

    async delete(request, response) {
        const {id} = request.headers;

        await knex('users')
            .where('id', id)
            .del()
            .then( () => {
                return response.json({Message: true});
            });
        
    }
}