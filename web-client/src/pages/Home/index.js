import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import IconImg from '../../assets/icon.png';

export default function Home() {
    return (
        <div className="Home-contaneir">
        <header className="header">
            <nav className="navbar">
                <img src={IconImg} alt="icone" />
                <input></input>
            </nav>
        </header>
            <aside className="paginas">
            </aside>
            <main className="principal">

            </main>
            <aside className="serviços">
                
            </aside>
        </div>
    );
}