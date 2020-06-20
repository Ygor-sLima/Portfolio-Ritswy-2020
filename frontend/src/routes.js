import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Movies from './pages/movies';
import SpecificMovie from './pages/specificMovie';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" component={SpecificMovie} />
            </Switch>
        </BrowserRouter>
    )
}