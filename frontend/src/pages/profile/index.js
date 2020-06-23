import React, {useState, useEffect} from 'react';
import {removerCookie, getCookie} from '../../services/cookies';
import api from '../../services/api';

import './styles.css';

export default function Profile({history}) {
    const [username, setUsername] = useState('');


    useEffect(() => {
        async function loadUser() {
            const response = await api.post(`/user/${getCookie()}`);
            setUsername(response.data[0].username);
        }
        loadUser();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.patch(`/user`, {username}, { headers: { id: getCookie() }});

        console.log(response);
    }

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
            <form onSubmit={handleSubmit} className="light fColumn">
                <h1>Change Profile</h1>
                <div className="fRow">
                    <i className="fas fa-user-circle"></i>

                    <div className="fColumn">
                        <span>Username</span>
                        <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={e => {setUsername(e.target.value)}}
                        value={username} 
                        />
                        <input 
                            type="password" 
                            placeholder="Current Password" 
                            disabled
                            style={{cursor: "not-allowed"}}
                        />
                        <div className="fRow doubleInput">
                            <input 
                                type="password" 
                                placeholder="New Password" 
                                disabled
                                style={{cursor: "not-allowed"}}
                            />
                            <input 
                                type="password" 
                                placeholder="Password Confirmation" 
                                disabled
                                style={{cursor: "not-allowed"}}
                            />
                        </div>
                        <button>Save</button>
                    </div>
                </div>
            </form>
            </nav>
        </div>
    );
}