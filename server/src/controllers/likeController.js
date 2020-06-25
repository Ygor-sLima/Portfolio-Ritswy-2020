const knex = require('../database/connection');

module.exports = {
    create(request, response) {
        const {like} = request.body;
        const {idComment} = request.params;
        const {id} = request.headers;
        const likeNumber = like ? 1 : -1;

        knex('likes')
            .insert({
                fkUser: id,
                fkComment: idComment,
                like: likeNumber
            })
            .catch( err => {
                response.json({requisicao: false, message: "Erro ao dar like", reason: err} );
            })
            .then( () => {
                return response.json({requisicao: true});
            });
    },

    index(request, response) {
        const {id} = request.headers;

        knex('likes')
            .select('fkComment','like')
            .where('fkUser', id)
            .catch( err => {
                return response.json({requisicao: false, message: "Erro ao buscar likes", reason: err});
            })
            .then( likes => {
                return response.json({requisicao:true, likes});
            });
    },

    async update(request, response) {
        const {like} = request.body;
        const {idComment} = request.params;
        const {id} = request.headers;
        const likeNumber = like ? 1 : -1;

        knex('likes')
            .where({fkUser: id, fkComment: idComment})
            .update({like: likeNumber})
            .then( () => {
                return response.json({requisicao: true});
            })
            .catch( () => {
                return response.json({requisicao: false});
            });
    },
} 