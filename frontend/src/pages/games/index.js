import React from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Games({history}) {

    return (
        <div className="gamesContainer dark">
            <nav className="container fColumn dark">
                <Header />
                <main className="fColumn">
                    <h1>Games produced</h1>

                    <div className="grid">
                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzE1NzM1NzEuanBn/347x500/39o1wj.jpg" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Your creation</strong>
                                </a>
                                <span>Simple scaling game.</span>
                            </div>
                        </figure>

                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzIzNTI2MTQucG5n/315x250%23c/60FFIO.png" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Onet</strong>
                                </a>
                                <span>Sometimes you are your only enemy.</span>
                            </div>
                        </figure>

                        <figure className="card fColumn">
                            <a href="">
                                <img height="250px" width="315px" src="https://img.itch.zone/aW1nLzE1NzM1NzEuanBn/347x500/39o1wj.jpg" alt="" />
                            </a>
                            <div className="fColumn">
                                <a href="">
                                    <strong>Your creation</strong>
                                </a>
                                <span>Simple scaling game.</span>
                            </div>
                        </figure>
                    </div>
                </main>
            </nav>
            <Footer history={history} />
        </div>
    );
}
