import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Movies from './pages/movies';
import SpecificMovie from './pages/specificMovie';
import Games from './pages/games';
import Profile from './pages/profile';
import Contact from './pages/contact';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" component={SpecificMovie} />
                <Route path="/games" component={Games} />
                <Route path="/profile" component={Profile} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}