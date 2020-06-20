import React from 'react';
import './styles.css';

export default function SpecificMovie() {

    return (
        <div className="specificMovieContainer">
            <nav className="container fRow dark">
                <main className="fRow">
                    <article>
                        <figure>
                            <img src="https://m.media-amazon.com/images/M/MV5BMjA1OTU1NDM3N15BMl5BanBnXkFtZTcwMjYxNTg0Nw@@._V1_SX300.jpg" alt="" />
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
                            Paranorman
                </strong>
                        <h1>
                            Duração:
                </h1>
                        <span>
                            92 min
                </span>
                        <h1>
                            Lançamento:
                </h1>
                        <time>
                            17/08/2012
                </time>
                        <h1>Diretor:</h1>
                        <span>Chris Butler, Sam Fell</span>
                        <h1>
                            Genêro:
                </h1>
                        <span>
                            Animation, Adventure, Comedy, Family, Fantasy, Mystery
                </span>
                        <h1>
                            Plot:
                </h1>
                        <span>
                            A misunderstood boy takes on ghosts, zombies and grown-ups to save his town from a centuries-old curse.
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