import React from 'react';
import FixedIconLink from '../../components/fixedIconLink';
import './styles.css';

export default function Login({ history }) {

    return (
        <div className="contactContainer">
            <nav className="container fColumn dark">
                <FixedIconLink
                    to={() => { history.push("/") }}
                    right={false}
                >
                    <i className="fas fa-arrow-left"></i>
                    <span>GoBack</span>
                </FixedIconLink>
                <form className="light fColumn">
                    <h1>Contact me</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                    />
                    <input
                        type="text"
                        name="assunto"
                        placeholder="Subject"
                    />
                    <textarea
                        name="Message"
                        id="message"
                        placeholder="Message . . ."
                        rows="4"
                    ></textarea>
                    <button>Submit</button>
                </form>
            </nav>
        </div>
    );
}
