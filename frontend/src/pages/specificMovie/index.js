import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';

export default function SpecificMovie({history, match}) {
    const idMovie = match.params.id;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/movie/${idMovie}`);
            
            if(response.data.requisicao) {
                setMovie(response.data.movie[0]);
            }
        }
        loadMovie();
    }, []);

    return (
        <div className="specificMovieContainer">
            <nav className="container fRow dark">
                <main className="fRow">
                    <article>
                        <figure>
                            <img src={movie.poster} style={{cursor: 'auto'}} alt="" />
                        </figure>
                        <div>
                            <span className="fRow">
                                <p>
                                    Minha avaliação:
                        </p>
                                <div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </span>

                            <span className="fRow">
                                <p>
                                    Nota IMDb:
                        </p>
                                <div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            </span>

                            <span className="fRow">
                                <p>
                                    Rotten Tomatoes:
                        </p>
                                <div>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>

                                </div>
                            </span>
                        </div>
                    </article>
                    <article>
                        <h1>
                            Título Original:
                </h1>
                        <strong>
                            {movie.title}
                </strong>
                        <h1>
                            Duração:
                </h1>
                        <span>
                            {movie.runtime}
                </span>
                        <h1>
                            Lançamento:
                </h1>
                        <time>
                            {movie.released}
                </time>
                        <h1>Diretor:</h1>
                        <span>{movie.director}</span>
                        <h1>
                            Genêro:
                </h1>
                        <span>
                            {movie.genre}
                </span>
                        <h1>
                            Plot:
                </h1>
                        <span>
                            {movie.plot}
                </span>
                    </article>
                </main>
                <section className="light">
                    <header className="fRow">
                        <div>
                            <i className="far fa-comment-alt"></i>
                        </div>
                        <span>
                            Comentários
                </span>
                    </header>
                    <div className="fColumn">
                        <article className="fRow">
                            <div className="fColumn">
                                <i className="fas fa-user-circle"></i>
                                <i className="fas fa-chevron-up"></i>
                        -123
                        <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="fColumn">
                                <div className="fRow">
                                    <strong>Usuario #1</strong>
                                    <time>15/06/2020</time>
                                </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi beatae corrupti, sapiente alias quos tempore architecto officia aperiam ea quas assumenda modi! Saepe enim nemo, ipsum perspiciatis perferendis libero quidem.
                    </div>
                        </article>
                        <article className="fRow">
                            <div className="fColumn">
                                <i className="fas fa-user-circle"></i>
                                <i className="fas fa-chevron-up"></i>
                        754
                        <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="fColumn">
                                <div className="fRow">
                                    <strong>Usuario #2</strong>
                                    <time>27/05/2020</time>
                                </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi beatae corrupti, sapiente alias quos tempore architecto officia aperiam ea quas assumenda modi! Saepe enim nemo, ipsum perspiciatis perferendis libero quidem.
                    </div>
                        </article>
                        <article className="fRow">
                            <div className="fColumn">
                                <i className="fas fa-user-circle"></i>
                                <i className="fas fa-chevron-up"></i>
                        1254
                        <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="fColumn">
                                <div className="fRow">
                                    <strong>Usuario #3</strong>
                                    <time>23/04/2020</time>
                                </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi beatae corrupti, sapiente alias quos tempore architecto officia aperiam ea quas assumenda modi! Saepe enim nemo, ipsum perspiciatis perferendis libero quidem.
                    </div>
                        </article>
                    </div>
                </section>
            </nav>
        </div>
    );
}