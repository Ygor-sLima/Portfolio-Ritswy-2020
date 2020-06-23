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
    }
} 