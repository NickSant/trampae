import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.png';
import logonImg from '../../assets/logonImg.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <nav>
                    <a href="/home">Quem Somos</a>
                </nav>
                <img className="logo" src={logoImg} alt="logo" />
                <form>
                    <h1>Faça seu Login</h1>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    
                    <Link className="back-link" to="/home">
                    <button className="button" type="submit">Entrar</button>
                    </Link>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#14b3b0" />
                    Não tenho cadastro
                </Link>
                </form>
            </section>
            <div className="img">
            <img src={logonImg} alt="trabalhador" />
            </div>
        </div>
    );
}