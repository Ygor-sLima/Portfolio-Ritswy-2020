const express = require('express');

const routes = express.Router();

const devMoviesController = require('./controllers/devMoviesController');
const moviesController = require('./controllers/moviesController');
const usersController = require('./controllers/usersController');
const loginController = require('./controllers/loginController');
const commentController = require('./controllers/commentController');
const likeController = require('./controllers/likeController');

//Login
routes.post('/login', loginController.show);
//User Related
routes.post('/user', usersController.create);
routes.post('/user/:id', usersController.show);
routes.patch('/user', usersController.update);
routes.delete('/user', usersController.delete);

//Movie user side
routes.get('/movie/:id', moviesController.show);
routes.get('/movie', moviesController.index);

//Movie dev side
routes.get('/dev/movies', devMoviesController.index);
routes.get('/dev/movies/:id', devMoviesController.create);

//Comments
routes.post('/comment/:idMovie', commentController.create);
routes.get('/comment/:idMovie', commentController.index);

//Likes
routes.post('/like/:idComment', likeController.create);

module.exports = routes;