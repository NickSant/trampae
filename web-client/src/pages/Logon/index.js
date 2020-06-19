import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.png';
import trabalhadorImg from '../../assets/trabalhadores.png'

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">    
            <img className="logo" src={logoImg} alt="logo"/>
            
            <form>
                <h1>Faça seu Login</h1>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/>
                <button className="button" type="submit">Entrar</button>
                <a href="/register">
                    <FiLogIn size={16} color="#14b3b0" />
                    Não tenho cadastro</a>
            </form>
            </section>
            <img src={trabalhadorImg} alt="trabalhador"/>
        </div>
    );
}