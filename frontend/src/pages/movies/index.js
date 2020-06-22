import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';

export default function Movies({history}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('/movie');

            setMovies(response.data);
        }
        loadMovies();
    }, []);
    

    return (
        <div className="moviesContainer">
            <nav className="container fColumn dark">
                <header className="fRow main dark">
                    <div className="fRow">
                        <a href="/">
                            <h1>Ritswy</h1>
                        </a>
                        <a href="/games">
                            <button className="light">Games</button>
                        </a>
                        <button className="light">Filmes</button>
                        <a href="/modelings">
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
                        {movies.map( m =>  (
                            //onClick={e=>{history.push(`/config/${classroom}/${salinha}/${t._id}`)}}
                                
                            <figure key={m.id}>
                                <img 
                                    width="150px"
                                    onClick={e=>{history.push(`movies/${m.id}`)}}
                                    src={m.poster}
                                    alt={`Poster ${m.title}`}
                                />
                            </figure>
                        ))}
                    </div>
                </section>
            </nav>
        </div>
    );
}