import React, {useState, useEffect} from 'react';
import {isAutenticado, getCookie} from '../../services/cookies';
import api from '../../services/api';
import './styles.css';

export default function SpecificMovie({history, match}) {
    const idMovie = match.params.id;
    const [movie, setMovie] = useState({});
    const [comments, setComments] = useState([]);
    const [comentario, setComentario] = useState('');
    const [likes, setLikes] = useState([]);
    const [fkComments, setFkComments] = useState([]);

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/movie/${idMovie}`);
            
            if(response.data.requisicao) {
                setMovie(response.data.movie[0]);
            }
        }
        loadMovie();
    }, []);

    useEffect(() => {
        async function loadLikes() {
            if(isAutenticado()) {
                const response = await api.get('/like', {headers: { id: getCookie()}});
                console.log(response);
                if(response.data.requisicao) {
                    let listaLikes =[];
                    let listaFkComment = [];

                    response.data.likes.map( l => {
                        listaLikes.push(l.like);
                        listaFkComment.push(l.fkComment);
                    });

                    setLikes(listaLikes);
                    setFkComments(listaFkComment);
                }
            }
        } 
        loadLikes();
    }, []);

    useEffect(() => {
        async function loadComments() {
            const response = await api.get(`/comment/${idMovie}`);

            if(response.data.requisicao) {
                setComments(response.data.comments);
            }
        }
        loadComments();
    }, [likes]);


    async function handleLike(userLike, commentId) {
        if(fkComments.includes(commentId)) {
            const response = await api.patch(`like/${commentId}`,
                {like:userLike}, {
                    headers: {id: getCookie()}
                });
            if (response.data.requisicao) {
                let index = fkComments.indexOf(commentId);
                let listaLikes = [];
                for (let i = 0; i < likes.length; i++) {
                    if(i != index) {
                        listaLikes.push(likes[i]);
                    } else {
                        listaLikes.push(userLike ? 1 : -1);
                    }
                }
                setLikes(listaLikes);
            }
        } else {
            const response = await api.post(`/like/${commentId}`,
            {like: userLike}, {
                headers: {id: getCookie()}
            });

            if (response.data.requisicao) {
                setFkComments([...fkComments, commentId]);
                setLikes([...likes, userLike ? 1 : -1 ]);
            }
        }
    }

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
                username: response.data.username,
                likeNumber: 0
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
                                    My Rating:
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
                                    IMDb Rating:
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
                            Title:
                </h1>
                        <strong>
                            {movie.title}
                </strong>
                        <h1>
                            Runtime:
                </h1>
                        <span>
                            {movie.runtime}
                </span>
                        <h1>
                            Release Date:
                </h1>
                        <time>
                            {movie.released}
                </time>
                        <h1>Director:</h1>
                        <span>{movie.director}</span>
                        <h1>
                            Genre:
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
                            Comments
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
                        {!isAutenticado() ?
                            comments.map( c => (
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
                            ))
                            :
                            comments.map( c => (
                                
                                <article className="fRow" key={c.id}>
                                    <div className="fColumn">
                                        <i className="fas fa-user-circle"></i>
                                        <i 
                                            onClick={ () => {handleLike(true, c.id)}}
                                            className="fas fa-chevron-up" 
                                            style={{color: likes[fkComments.indexOf(c.id)] === 1 ? 'var(--verde)':'#f1f1f1'}}
                                        ></i>
                                        {c.likeNumber !== null ? c.likeNumber : 0}
                                        <i 
                                            onClick={ () => {handleLike(false, c.id)}}
                                            className="fas fa-chevron-down"
                                            style={{color: likes[fkComments.indexOf(c.id)] === -1 ? 'var(--verde)':'#f1f1f1'}}
                                        ></i>
                                    </div>
                                    <div className="fColumn">
                                        <div className="fRow">
                                            <strong>{c.username}</strong>
                                            <time>{c.data}</time>
                                        </div>
                                        {c.comment}
                                    </div>
                                </article>
                            ))
                        }
                        
            
                    </div>
                </section>
            </nav>
        </div>
    );
}
