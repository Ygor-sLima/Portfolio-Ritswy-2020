import React from 'react';
import '../login/styles.css';

export default function Register() {

    return (
        <div classNameName="loginRegisterContainer">
            <nav className="container fColumn dark">
                <div className="fRow">
                    <a href="/">
                        <i className="fas fa-arrow-left"></i>
                        <span>Voltar</span>
                    </a>
                </div>
                <form action="" className="light fColumn">
                    <h1>Cadastre-se</h1>
                    <input
                        type="text"
                        name="name"
                        id="nome"
                        placeholder="Usuário"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                    />
                    <input
                        type="password"
                        id="confirmacaoSenha"
                        placeholder="Confirmação da senha"
                    />
                    <button>Entrar</button>
                    <a href="/login">Já está cadastrado?</a>
                </form>
            </nav>
        </div>
    );
}