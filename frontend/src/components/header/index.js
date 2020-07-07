import React from 'react';
import {isAutenticado} from '../../services/cookies';

const Header = ({  }) => {

    return (
        <header className="fRow main">
            <div className="fRow">
                <a href="/">
                    <h1>Ritswy</h1>
                </a>
                <a href="" >
                    <button style={{cursor: 'not-allowed'}} className="light">3D Modeling</button>
                </a>
                <a href="/games">
                    <button className="light">Games</button>
                </a>
                <a href="/movies">
                    <button className="light">Movies</button>
                </a>
                <a href="">
                    <button style={{cursor: 'not-allowed'}} className="light">Music</button>
                </a>

            </div>

            <div>
                <a href="/contact">
                    <button className="light">Contact</button>
                </a>
                {
                    isAutenticado() ?
                    <a href="/profile">
                        <button className="active">Profile</button>
                    </a>
                    :
                    <a href="/login">
                        <button className="active">Login</button>
                    </a>
                }
            </div>
        </header>
    );
}

export default Header;
