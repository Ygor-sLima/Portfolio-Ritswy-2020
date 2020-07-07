import React from 'react';
import './styles.css';
import Footer from '../../components/footer';
import Header from '../../components/header';
import me from '../../assets/Ygor_e_calopsita.jpg';

export default function Home({history}) {

    return (
        <div className="homeContainer dark">

            <nav className="fColumn container light">
                <Header />
                <div className="fColumn middle">
                    <h1>Portfolio 2020</h1>
                    <h2>A step beyond the artistic world.</h2>
                </div>
                <footer>
                    <div className="fRow">
                        <a href="">
                            <button style={{cursor: 'not-allowed'}}><i className="fas fa-cubes"></i> 3D Modeling</button>
                        </a>
                        <a href="/games">
                            <button><i className="fas fa-gamepad"></i> Games</button>
                        </a>
                        <a href="/movies">
                            <button><i className="fas fa-film"></i> Movies</button>
                        </a>
                        <a href="">
                            <button style={{cursor: 'not-allowed'}}><i class="fas fa-music"></i>Music</button>
                        </a>
                    </div>

                    <div className="fColumn">
                        <h2>
                            Read More
                </h2>
                        <i className="fas fa-angle-double-down"></i>
                    </div>
                </footer>
            </nav>

            <nav className="fColumn container dark">
                <h1 className="title">
                    About me
        </h1>
                <div className="fRow middle" style={{marginTop: '2em'}}>
                    <img src={me} alt="Imagem sobre mim" />
                    <p>
			Me, Ritswy. A bird lover, found yourself in the artistic path in a complex way. Started loving art by a non-common way. By a necessity of evolution, and not only that, but for a bigger meaning. Game development, this industry is growing bigger, and why not improve something relevant not only for the human spirity and for the brazilian game industry.
            </p>
                </div>
            </nav>

            <nav className="fColumn container light">
                <h1 className="title">Recently Watched</h1>
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
                    <a href="/movies">
                        <button>Recently watched<i className="fas fa-arrow-right"></i></button>
                    </a>
                </footer>
            </nav>

            <nav className="fColumn container light">
                <section className="middle">
                    <h1 className="title">Games</h1>
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
                                <span>
				Game built for the BlackthornProd Game Jam 2018. Made during a week based on the theme "Game Development".
				</span>
                            </div>
                            <button className="btnIcon">
                                Play
                            <i className="fas fa-play-circle" style={{fontSize: '1.5em'}}></i>
                            </button>
                        </figure>
                        <a href="/games">
                            <button className="btnIcon">More <i className="fas fa-arrow-right"></i></button>
                        </a>

                    </div>

                </section>
                
                <footer className="middle fColumn dark" style={{marginTop: '50px'}}>
                    <h1 className="title center">STAY CONNECTED</h1>
                    <div className="fRow connectContainer">
                        <a href="https://github.com/Ygor-sLima">
                            <i class="fab fa-github"></i>
                        </a>
                        <i class="fab fa-discord"></i>
                        <a href="/contact">
                            <i class="fas fa-envelope" style={{padding: '0'}}></i>
                        </a>
                    </div>
                </footer>
            </nav>        
            <Footer history={history} />
        </div>
    );
}
