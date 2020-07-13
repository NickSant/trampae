import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { FiClipboard } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.png';
import dardo from '../../assets/dardo.png';
import prancheta from '../../assets/prancheta.png';
import maos from '../../assets/maos.png';

import { FiLogIn } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";

export default function AboutUs() {
    return (
        <div className="Aboutus-container">
            <header className="alinhar">
                <div className="alinhar">
                    <img className="logo-1" src={logoImg} alt="logo" />
                </div>
                <div className="menu">
                    <Link className="volta-link" to="/home">
                        <FiHome size={16} color="#222222" />
                            Home
                        </Link>
                    <Link className="volta-link" to="/register">
                        <FiClipboard size={16} color="#222222" />
                            Cadastro
                        </Link>

                    <Link className="volta-link" to="/">
                        <FiLogIn size={16} color="#222222" />
                            Login
                        </Link>
                </div>
            </header>
            <div className="Quem-somos">
                <img className="maos" src={maos} alt="Mãos Dadas" />
                <h3 className="h3"> Quem somos? </h3>
                <p className="p">Somos uma plataforma digital que busca unir pessoas interessadas por um "bico" e pessoas que oferecem esses "bicos".
                </p>

                <p className="p">Sabemos que muitas vezes necessitamos de alguém que saiba realizar um determinado serviço em nossas casas e ou trabalho. Para isso é necessário chamar alguém que saiba resolver tal problema. Dessa forma,o prestador e o necessitado tem contato direto,podendo assim decidir suas maneiras de como será feito o "bico".</p>
            </div>
            <div className="Nossas-mot">
                <img className="prancheta" src={prancheta} alt="Prancheta" />
                <h3 className="h3"> Nossas Motivações </h3>
                <p className="p">
                    Nossa empresa busca melhorar a facilidade de encontrar e gerar serviços,
                    uma vez que, existem pessosas capacitadas a fazerem seviços. Por isso criamos um método
                    ágil e prático, facilitando a vida de pessoas que necessitam de um emprego de forma instantânea.
                </p>
            </div>
            <div className="Nossos-Obj">
                <img className="objetivos" src={dardo} alt="Dardo" />
                <h3 className="h3"> Nossos Objetivos </h3>
                <p className="p">
                    O Trampâe tem como objetivo principal o bem-estar das pessoas que acessam nossa plataforma,para assim divulgar o maior número de pessoas que estejam disponibilizando bicos para a população.
                </p>

                <p className="p">
                    Dessa forma, abrir o comércio de uma maneira totalmente inovadora, incentivando pessoas com diferentes tipos de dons, exercendo diferentes tipos de trampos para no fim, seus bicos serem valorizados.

               </p>
            </div>
        </div>
    );
}
