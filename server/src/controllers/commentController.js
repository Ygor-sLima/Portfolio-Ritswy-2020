const knex = require('../database/connection');

module.exports = {
    create(request, response) {
        const {comment} = request.body;
        const {idMovie} = request.params;
        const {id} = request.headers;

        let data = new Date();
        data = `${data.getMonth()+1}/${data.getDate()}/${data.getFullYear()}`;

        knex('comments')
            .insert({
                fkUser: id,
                fkMovie: idMovie,
                comment,
                data
            })
            .catch( err => {
                response.json({requisicao: false, message: "Erro ao comentar", reason: err} );
            })
            .then( idComment => {
                knex('users')
                    .where('id', id)
                    .select('username')
                    .then( username => {
                        return response.json({requisicao: true, idComment, username: username[0].username, data});
                    });
            });
    },
    index(request, response) {
        const {idMovie} = request.params;

        knex('comments')
            .join('users', 'users.id', 'comments.fkUser')
            .leftJoin('likes', 'likes.fkComment', 'comments.id')
            .where('fkMovie', idMovie)
            .groupBy('comments.id')
            .select('comments.*','users.username')
            .sum('likes.like as likeNumber')
            .catch( err => {
                return response.json({requisicao: false, message:"Erro ao buscar listagem", reason: err});
            })
            .then( comments => {
                return response.json({requisicao: true, comments});
            });
    }
} 