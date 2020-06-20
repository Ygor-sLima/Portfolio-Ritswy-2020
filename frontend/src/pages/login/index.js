import React from 'react';
import './styles.css';

export default function Login() {

    return (
        <div className="loginRegisterContainer">
            <nav className="container fColumn dark">
            <div className="fRow">
                <a href="index.html">
                    <i className="fas fa-arrow-left"></i>
                    <span>Voltar</span>
                </a>
            </div>
            <form action="" className="light fColumn">
                <h1>LogIn</h1>
                <input type="email" name="" id="" placeholder="E-mail" />
                <input type="password" name="" id="" placeholder="Senha" />
                <button>Entrar</button>
                <a href="forgotPassword.html">Esqueceu a senha?</a>
                <a href="register.html">Ainda não está cadastrado?</a>
            </form>
            </nav>
        </div>
    );
}