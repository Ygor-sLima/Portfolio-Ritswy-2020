import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {isAutenticado} from './services/cookies';

import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Movies from './pages/movies';
import SpecificMovie from './pages/specificMovie';
import Games from './pages/games';
import Profile from './pages/profile';
import Contact from './pages/contact';
import DevPage from './pages/devPage';

export default function Routes() {

    const LoggedRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            isAutenticado() ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
          }
        />
      );
    
      const NotLoggedRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            isAutenticado() ? (
              <Redirect to={{ pathname: "/", state: { from: props.location } }} />
              
            ) : (
              <Component {...props} />
            )
          }
        />
      );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <NotLoggedRoute path="/login" component={Login} />
                <NotLoggedRoute path="/register" component={Register} />
                <Route path="/movies" exact component={Movies} />
                <Route path="/movies/:id" component={SpecificMovie} />
                <Route path="/games" component={Games} />
                <LoggedRoute path="/profile" component={Profile} />
                <Route path="/contact" component={Contact} />
                <Route path="/dev" component={DevPage} />
            </Switch>
        </BrowserRouter>
    )
}
