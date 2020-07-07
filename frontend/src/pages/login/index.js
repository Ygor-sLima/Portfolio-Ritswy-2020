import React, {useState} from 'react';
import api from '../../services/api';
import {armazenarCookie} from '../../services/cookies';
import './styles.css';

export default function Login({history}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [displayErro, setDisplayErro] = useState('none'); 

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
            setDisplayErro('flex');
            document.getElementById('erroMessage').innerHTML = response.data.message;
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
            <div className="erroMessage" style={{display: displayErro}}>
                <span id="erroMessage"></span>
                <i className="fas fa-times" onClick={() => {setDisplayErro('none')}}></i>
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
                <button>LogIn</button>
                <a href="/register">Not registered yet?</a>
                <a href="/forgotPassword">Forgot your password?</a>
            </form>
            </nav>
        </div>
    );
}
