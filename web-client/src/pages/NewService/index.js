import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import './responsive.css';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.png'

export default function Newservice() {
    return (
        <div className="New-Service-Container">
            {/*Parte da logo e dos textos*/}
            <div className="content">
                <section>
                    <img className="Logo" src={logoImg} alt='Trampâe' />
                    <h1>Cadastrar Novo Bico</h1>
                    <p>Cadastre um novo bico e tenha seus problemas de Trâmpo solucionados.</p>
                    <Link className="return-link" to="/home">
                        <FiArrowLeft size={16} color="#14b3b0" />
                        Voltar para Home
                    </Link>
                </section>

                {/*Formulário*/}
                <form>
                    <input placeholder="Título do Bico"/>
                    <textarea className="alinha" placeholder="Descrição"/>
                    <Link className="return-link" to="/home">
                    <button className="B-utton">Cadastar</button>
                    </Link>
                </form>
            </div>
        </div>
     );            
}