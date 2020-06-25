import React, {useState, useEffect} from 'react';
import './styles.css';
import api from '../../services/api';

export default function DevPage({history}) {
    const [search, setSearch] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);
    
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.get(`/dev/movies?s=${search}&y=${year}&page`);
    
        if(response.data.requisicao) {
            setMovies(response.data.data.Search);
        }
    }

    async function handleClick(id) {
        const response = await api.get(`/dev/movies/${id}`);

        if(response.data.requisicao) {
            alert("Filme inserido");
        } else {
            alert("Falha ao inserir");
        }
    }

    return (
        <div className="devPageContainer">
            <nav className="container fColumn dark">
                <section className="fColumn">
                    <h2>Pesquisar filmes</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            placeholder="Título" 
                            type="text" 
                            value={search}
                            onChange={e => {setSearch(e.target.value)}}
                        />
                        <input 
                            placeholder="Ano" 
                            type="number"
                            min="0" 
                            max="2021" 
                            value={year}
                            onChange={e => {setYear(e.target.value)}}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </form>

                    <div className="grid">
                        
                        {
                            movies.length === 0 ? <h1 className="title">Aqui retornará os filmes . . .</h1> :
                            movies.map( m =>  (
                                //onClick={e=>{history.push(`/config/${classroom}/${salinha}/${t._id}`)}}
                                    
                                <figure className="fColumn" key={m.imdbID}>
                                    <img 
                                        width="150px"
                                        src={m.Poster}
                                        alt={`Poster ${m.Title}`}
                                    />
                                    <strong>
                                        {m.Title}
                                    </strong>
                                    <button onClick={ () => {handleClick(m.imdbID)}}>Salvar</button>
                                </figure>
                            ))
                        }
                        
                    </div>
                </section>
            </nav>
        </div>
    );
}