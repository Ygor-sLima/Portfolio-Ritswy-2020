import React, {useState} from 'react';
import '../login/styles.css';
import api from '../../services/api';

export default function Register({history}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [username, setUsername] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [displayErro, setDisplayErro] = useState('none'); 

    async function handleSubmit(e) {
        e.preventDefault();
        document.getElementById('erroMessage').innerHTML = "";

        if(senha.length < 8) {
            //Fazer mostrar errorMEssage
            setDisplayErro('flex');
            document.getElementById('erroMessage').innerHTML += 'A senha precisa conter ao menos 8 caracteres';
            return;
        }
        if(senha != confirmarSenha) {
            setDisplayErro('flex');
            document.getElementById('erroMessage').innerHTML += 'As senhas precisam ser iguais';
            return;
        }
        if(username.length < 4) {
            setDisplayErro('flex');
            document.getElementById('erroMessage').innerHTML += 'Usuario precisa ter ao menos 4 caracteres';
            return;
        }
        //Variaveis para verificar futuramente se contem um desses dentro da senha
        let maiusculo;
        let minusculo;
        let numero;
        let naoAlfaNumerico;

        //Lista de caracteres para verificacao
        let alfabetoMinusculo="abcdefghijklmnopqrstuvwxyz";
        let alfabetoMaiusculo="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let listaNumeros="0123456789";
        let listaNaoAlfaNumericos="!@#$%*()_+^&{}}:;?.";

        //Transforma string em array
        alfabetoMaiusculo = alfabetoMaiusculo.split("");
        alfabetoMinusculo = alfabetoMinusculo.split("");
        listaNumeros = listaNumeros.split("");
        listaNaoAlfaNumericos = listaNaoAlfaNumericos.split("");

        //Percorrendo todo o array e verificando se tem ao menos um dentro da senha
        alfabetoMinusculo.map( letra => {
            if(senha.indexOf(letra) != -1) {
                minusculo = true;
            }
        });
        alfabetoMaiusculo.map( letra => {
            if(senha.indexOf(letra) != -1) {
                maiusculo = true;
            }
        });
        listaNumeros.map( letra => {
            if(senha.indexOf(letra) != -1) {
                numero = true;
            }
        });
        listaNaoAlfaNumericos.map( letra => {
            if(senha.indexOf(letra) != -1) {
                naoAlfaNumerico = true;
            }
        });
        //Verificando se continha algum dos necessarios
        if(!maiusculo || !minusculo || !numero || !naoAlfaNumerico) {
            let mensagem = `A senha precisa conter: ${maiusculo ? "" : "<br>Letras em maiusculo" }${minusculo ? "" : "<br>Letras em minusculo" }${numero ? "" : "<br>Números" }${naoAlfaNumerico ? "": "<br>Caracteres não alfanumérico "}`;
            setDisplayErro('flex');
            document.getElementById('erroMessage').innerHTML = mensagem;
            return;
        }

            


        const response = await api.post('/user', {email, senha, username});
        if( response.data.requisicao ) {
            alert("Cadastro feito");
            history.push('/login');
        } else {
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
                    <h1>SignUp</h1>
                    <input
                        required
                        type="text"
                        name="name"
                        id="nome"
                        value={username}
                        onChange={e => {setUsername(e.target.value)}}
                        placeholder="Username"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}
                        placeholder="Email"
                    />
                    <input
                        required
                        type="password"
                        name="senha"
                        id="senha"
                        value={senha}
                        onChange={e => {setSenha(e.target.value)}}
                        placeholder="Password"
                    />
                    <input
                        required
                        type="password"
                        id="confirmacaoSenha"
                        value={confirmarSenha}
                        onChange={e => {setConfirmarSenha(e.target.value)}}
                        placeholder="Password Confirmation"
                    />
                    <button>Sign Up</button>
                    <a href="/login">Already signed up?</a>
                </form>
            </nav>
        </div>
    );
}
