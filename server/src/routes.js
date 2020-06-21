const express = require('express');

const routes = express.Router();

const devMoviesController = require('./controllers/devMoviesController');
const moviesController = require('./controllers/moviesController');
const usersController = require('./controllers/usersController');

routes.post('/user', usersController.create);
routes.post('/user/:id', usersController.show);
routes.patch('/user', usersController.update);
routes.delete('/user', usersController.delete);
routes.get('/movie/:id', moviesController.show);
routes.get('/movie', moviesController.index);
routes.get('/dev/movies', devMoviesController.index);
routes.get('/dev/movies/:id', devMoviesController.create);

module.exports = routes;