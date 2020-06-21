import React, {useState} from 'react';
import '../login/styles.css';
import api from '../../services/api';

export default function Register({history}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [username, setUsername] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/user', {email, senha, username});
        if( response.data.requisicao ) {
            alert("Cadastro feito");
            history.push('/login');
        } else {
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
                    <h1>Cadastre-se</h1>
                    <input
                        type="text"
                        name="name"
                        id="nome"
                        value={username}
                        onChange={e => {setUsername(e.target.value)}}
                        placeholder="Usuário"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={senha}
                        onChange={e => {setSenha(e.target.value)}}
                        placeholder="Senha"
                    />
                    <input
                        type="password"
                        id="confirmacaoSenha"
                        value={confirmarSenha}
                        onChange={e => {setConfirmarSenha(e.target.value)}}
                        placeholder="Confirmação da senha"
                    />
                    <button>Entrar</button>
                    <a href="/login">Já está cadastrado?</a>
                </form>
            </nav>
        </div>
    );
}