import React, {useState} from 'react';
import api from '../../services/api';
import {armazenarCookie} from '../../services/cookies';
import './styles.css';

export default function Login({history}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/login',{email, senha});
        console.log(response);
        if(response.data.requisicao) {
            armazenarCookie(response.data.id);
            
            alert("Login efetuado.");
            history.push('/profile');
        }
        else {
            alert(response.data.message);
        }
    }

    return (
        <div className="loginRegisterContainer">
            <nav className="container fColumn dark">
            <div className="fRow">
                <a href="/">
                    <i className="fas fa-arrow-left"></i>
                    <span>Voltar</span>
                </a>
            </div>
            <form onSubmit={handleSubmit} className="light fColumn">
                <h1>LogIn</h1>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                />
                <input 
                    type="password"
                    name="senha" 
                    placeholder="Password" 
                    value={senha}
                    onChange={e => {setSenha(e.target.value)}}
                />
                <button>Entrar</button>
                <a href="/forgotPassword">Esqueceu a senha?</a>
                <a href="/register">Ainda não está cadastrado?</a>
            </form>
            </nav>
        </div>
    );
}