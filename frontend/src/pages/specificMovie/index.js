import React, {useState, useEffect} from 'react';
import {isAutenticado, getCookie} from '../../services/cookies';
import api from '../../services/api';
import './styles.css';

export default function SpecificMovie({history, match}) {
    const idMovie = match.params.id;
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const [comentario, setComentario] = useState('');

    useEffect(() => {
        async function loadComments() {
            const response = await api.get(`/comment/${idMovie}`);

            if(response.data.requisicao) {
                setComments(response.data.comments);
            }
        }
        loadComments();
    })

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/movie/${idMovie}`);
            
            if(response.data.requisicao) {
                setMovie(response.data.movie[0]);
            }
        }
        loadMovie();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post(`/comment/${idMovie}`,
            {comment: comentario}, 
            { headers: {id: getCookie()}});
        console.log(response);
        if (response.data.requisicao) {
            const c = {
                id: response.data.idComment,
                fkUser: getCookie(),
                fkMovie: idMovie,
                comment: comentario,
                data: response.data.data,
                username: response.data.username
            };

            setComentario('');
            setComments([...comments, c]);
        }
    }

    return (
        <div className="specificMovieContainer">
            <nav className="container fRow dark">
                <div className="fRow fixed">
                    <a href="/movies">
                        <i className="fas fa-arrow-left"></i>
                        <span>Voltar</span>
                    </a>
                </div>
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
                        {isAutenticado() ?
                            //Só permite comentar se estiver logado
                            <form onSubmit={handleSubmit} className="fColumn">
                                <input 
                                    type="text" 
                                    placeholder="Write your comment here . . ."
                                    value={comentario}
                                    onChange={e => {setComentario(e.target.value)}}
                                />
                                <button>Comment</button>
                            </form> :
                            ''
                        }
                        
                        {comments.map( c => (
                            <article className="fRow" key={c.id}>
                                <div className="fColumn">
                                    <i className="fas fa-user-circle"></i>
                                    <i className="fas fa-chevron-up"></i>
                                    {c.likeNumber !== null ? c.likeNumber : 0}
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="fColumn">
                                    <div className="fRow">
                                        <strong>{c.username}</strong>
                                        <time>{c.data}</time>
                                    </div>
                                    {c.comment}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </nav>
        </div>
    );
}