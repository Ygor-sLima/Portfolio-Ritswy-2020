import React from 'react';
import {removerCookie} from '../../services/cookies';

import './styles.css';

export default function Profile({history}) {

    async function handleLogout() {
        removerCookie();
        alert("Você não está mais logado");
        history.push("/");
    }

    return (
        <div className="profileContainer">
            <nav className="container fColumn dark">
            <div className="fRow fixed">
                <a href="/">
                    <i className="fas fa-arrow-left"></i>
                    <span>Voltar</span>
                </a>
            </div>
            <div className="fRow fixed right" onClick={handleLogout}>
                <span>SignOut</span>
                <i className="fas fa-sign-out-alt"></i>
            </div>
            <form action="" className="light fColumn">
                <h1>Change Profile</h1>
                <div className="fRow">
                    <i className="fas fa-user-circle"></i>

                    <div className="fColumn">
                        <span>Username</span>
                        <input type="text" name="username" id="" placeholder="Username" />
                        <input type="password" id="" placeholder="Current Password" />
                        <div className="fRow doubleInput">
                            <input type="password" id="" placeholder="New Password" />
                            <input type="password" id="" placeholder="Password Confirmation" />
                        </div>
                        <button>Save</button>
                    </div>
                </div>
            </form>
            </nav>
        </div>
    );
}