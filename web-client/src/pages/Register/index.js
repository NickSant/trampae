import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img className="logo" src={logoImg} alt='Trampâe'/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro,entre na plataforma e intereja com pessoas por meio de serviços.</p>
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#14b3b0" />
                    Não tenho cadastro
                    </Link>

                </section>
                <form>
                    <input placeholder="Nome do Usuário"></input>
                    <input type="Email" placeholder="E-mail"></input>
                    <input placeholder="WhatsApp"></input>

                    <div className="input-group">
                        <input placeholder="Cidade"></input>
                        <input placeholder="UF" style={{width: 80}}></input>
                    </div>

                    <button className="button" type="submit">Cadastar</button>
                </form>
            </div>
        </div>

    );
}