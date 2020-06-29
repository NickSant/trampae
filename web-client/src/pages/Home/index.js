import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.png';

export default function Home(){
    return  (
      
        <div className="Home-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt='Trampâe'/>
                    <h1>Bem-Vindo</h1>
                    <p>O melhor site para a busca e a procura de empregos mais próximos de você</p>
                    <Link className="back-link" to="/">
                        Já tenho cadastro
                    </Link>
                </section>
               
                    <Link className="back-link" to="/">
                    <button className="button" type="submit">Procurar empregos</button>
                    </Link>
            </div>
        </div>

    );
}