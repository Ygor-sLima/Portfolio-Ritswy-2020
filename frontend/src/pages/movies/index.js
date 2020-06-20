import React from 'react';
import './styles.css';

export default function Movies() {

    return (
        <div className="moviesContainer">
            <nav className="container fColumn dark">
                <header className="fRow main dark">
                    <div className="fRow">
                        <a href="/">
                            <h1>Ritswy</h1>
                        </a>
                        <a href="games.html">
                            <button className="light">Games</button>
                        </a>
                        <button className="light">Filmes</button>
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
                <section className="fColumn">
                    <h2>Ache filmes em comum comigo!</h2>
                    <form onSubmit="">
                        <input placeholder="Título" type="text" />
                        <input placeholder="Ano" type="number" min="0" max="2021" />
                        <button><i className="fas fa-search"></i></button>
                    </form>

                    <div className="grid">
                        <h1 className="title">
                            Filmes
                </h1>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMjU0MzBiMDctMmU3NS00NjRkLTkzMzgtZWE3NmExZGI0MmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMTg4MzcxODA3OV5BMl5BanBnXkFtZTcwMTYzNDkwOQ@@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BZjhhMThhNDItNTY2MC00MmU1LTliNDEtNDdhZjdlNTY5ZDQ1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMWZmNzk5M2QtOTM3MC00ZTg1LWJlYWMtMGIxZWVjODUwNTEzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMTU5OTczMTcxMV5BMl5BanBnXkFtZTcwNDg3MTEzMw@@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMjA1OTU1NDM3N15BMl5BanBnXkFtZTcwMjYxNTg0Nw@@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                        <figure>
                            <img width="150px" src="https://m.media-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SX300.jpg" alt="Poster" />
                        </figure>
                    </div>
                </section>
            </nav>
        </div>
    );
}