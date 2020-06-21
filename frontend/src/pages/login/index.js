import React from 'react';
import './styles.css';

export default function Login() {

    return (
        <div className="loginRegisterContainer">
            <nav className="container fColumn dark">
            <div className="fRow">
                <a href="/">
                    <i className="fas fa-arrow-left"></i>
                    <span>Voltar</span>
                </a>
            </div>
            <form className="light fColumn">
                <h1>LogIn</h1>
                <input type="text" name="username" id="" placeholder="Username" />
                <input type="email" name="email" id="" placeholder="Email" />
                <input type="password" name="senha" id="" placeholder="Password" />
                <button>Entrar</button>
                <a href="/forgotPassword">Esqueceu a senha?</a>
                <a href="/register">Ainda não está cadastrado?</a>
            </form>
            </nav>
        </div>
    );
}