import React from 'react';
import './styles.css';
import me from '../../assets/Ygor_e_calopsita.jpg';

export default function Home() {

    return (
        <div className="homeContainer">

            <nav className="fColumn container light">
                <header className="fRow main light">
                    <div className="fRow">
                        <h1>
                            Ritswy
                </h1>
                        <a href="games.html">
                            <button className="light">Games</button>
                        </a>
                        <a href="movies.html">
                            <button className="light">Filmes</button>
                        </a>
                        <a href="modelagem.html">
                            <button className="light">Modelagem</button>
                        </a>
                    </div>

                    <div>
                        <a href="contact.html">
                            <button className="light">Contact</button>
                        </a>
                        <a href="login.html">
                            <button className="active">Login</button>
                        </a>
                    </div>
                </header>
                <div className="fColumn middle">
                    <h1>Uma frase de efeito brabissima</h1>
                    <h2>Segunda frase de efeito braba</h2>
                </div>
                <footer>
                    <div className="fRow">
                        <a href="./jooj.html">
                            <button><i className="fas fa-gamepad"></i> Games</button>
                        </a>
                        <a href="./modeling.html">
                            <button><i className="fas fa-cubes"></i> Modelagem</button>
                        </a>
                        <a href="./movies.html">
                            <button><i className="fas fa-film"></i> Filmes</button>
                        </a>
                    </div>

                    <div className="fColumn">
                        <h2>
                            Saiba mais
                </h2>
                        <i className="fas fa-angle-double-down"></i>
                    </div>
                </footer>
            </nav>

            <nav className="fColumn container dark">
                <h1 className="title">
                    Sobre mim
        </h1>
                <div className="fRow middle" style={{marginTop: '2em'}}>
                    <img src={me} alt="Imagem sobre mim" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa magnam veritatis quam accusamus accusantium ratione natus odio incidunt animi suscipit nemo quidem, id at nobis quos, atque rerum doloremque architecto!Deserunt exercitationem obcaecati nam veniam consequatur, eius incidunt vel rem repudiandae enim facere dolor, cumque harum expedita debitis dolores neque commodi, vero eaque. Error, magnam. Facilis quidem sit magni praesentium.

            </p>
                </div>
            </nav>

            <nav className="fColumn container light">
                <h1 className="title">Assistidos recentemente</h1>
                <ul className="fRow" style={{
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}>
                    <li className="fRow" >
                        <img width="150px" src="https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="Poster" />
                        <div className="fColumn">
                            <header className="fRow">
                                <strong className="title">The Kid (1921)</strong>
                                <p>66min</p>
                            </header>
                            <strong>Genre:</strong>
                            <span>Comedy, Drama, Family</span>
                            <strong>Directors:</strong>
                            <span>Charles Chaplin</span>
                            <strong>Plot:</strong>
                            <span>The Tramp cares for an abandoned child, but events put that relationship in jeopardy.</span>
                        </div>
                    </li>
                    <li className="fRow" >
                        <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMjU0MzBiMDctMmU3NS00NjRkLTkzMzgtZWE3NmExZGI0MmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Poster" />
                        <div className="fColumn">
                            <header className="fRow">
                                <strong className="title">The Squid and the Whale (2005)</strong>
                                <p>88min</p>
                            </header>

                            <strong>Genre:</strong>
                            <span>Comedy, Drama</span>
                            <strong>Directors:</strong>
                            <span>Noah Baumbach</span>
                            <strong>Plot:</strong>
                            <span>Follows two young boys dealing with their parents' divorce in Brooklyn in the 1980s.</span>
                        </div>
                    </li>
                </ul>
                <footer style={{marginTop: '4em'}}>
                    <a href="./movies.html">
                        <button>All movies watched <i className="fas fa-arrow-right"></i></button>
                    </a>
                </footer>
            </nav>

            <nav className="fColumn container light">
                <section className="middle">
                    <h1 className="title">
                        Games
            </h1>
                    <div className="fRow" style={{
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        <figure className="card fRow light">
                            <div className="fColumn">
                                <img src="https://img.itch.zone/aW1nLzE1NzM1NzEuanBn/347x500/39o1wj.jpg" alt="" />
                            </div>
                            <div className="fColumn">
                                <strong>Your creation</strong>
                                <span>Jogo construído para a BlackthornProd Game Jam 2018. Feito durante uma semana com a proposta de tema "Game Development".</span>
                            </div>
                            <button className="btnIcon">
                                Jogar
                            <i className="fas fa-play-circle" style={{fontSize: '1.5em'}}></i>
                            </button>
                        </figure>
                        <a href="./movies.html">
                            <button className="btnIcon">Veja mais <i className="fas fa-arrow-right"></i></button>
                        </a>

                    </div>

                </section>
                <section className="middle">
                    <h1 className="title">Modelagem</h1>
                </section>
            </nav>
        </div>

    );
}