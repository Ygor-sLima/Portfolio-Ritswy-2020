import React, {useState, useEffect} from 'react';
import './styles.css';
import Header from '../../components/header';
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
                <Header />
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