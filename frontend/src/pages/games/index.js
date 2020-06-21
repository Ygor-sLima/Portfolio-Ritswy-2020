import React from 'react';
import './styles.css';

export default function Games() {

    return (
        <div className="gamesContainer">
            <nav className="container fColumn dark">
                <header className="fRow main dark">
                    <div className="fRow">
                        <a href="/">
                            <h1>Ritswy</h1>
                        </a>
                        <button className="light">Games</button>
                        <a href="/movies">
                            <button className="light">Filmes</button>
                        </a>
                        <a href="/modelagem">
                            <button className="light">Modelagem</button>
                        </a>
                    </div>

                    <div>
                        <a href="/contact">
                            <button className="light">Contact</button>
                        </a>
                        <a href="/login">
                            <button className="active">Login</button>
                        </a>
                    </div>
                </header>
                <main className="fColumn">
                    <h1>Jogos produzidos</h1>

                    <div className="grid">
                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzE1NzM1NzEuanBn/347x500/39o1wj.jpg" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Your creation</strong>
                                </a>
                                <span>Simple scaling game.</span>
                            </div>
                        </figure>

                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzIzNTI2MTQucG5n/315x250%23c/60FFIO.png" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Onet</strong>
                                </a>
                                <span>Sometimes you are your only enemy.</span>
                            </div>
                        </figure>

                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzE1NzM1NzEuanBn/347x500/39o1wj.jpg" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Your creation</strong>
                                </a>
                                <span>Simple scaling game.</span>
                            </div>
                        </figure>
                    </div>
                </main>
            </nav>
        </div>
    );
}