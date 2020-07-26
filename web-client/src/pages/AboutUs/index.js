import React from 'react';
import './styles.css';
import './responsive.css';
import { Link } from 'react-router-dom';
import { FiLogIn, FiHome, FiUser, FiUsers, FiClipboard, FiCheckCircle } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

export default function AboutUs() {
    return (
        /*Começo do header*/
        <div className="Aboutus-container">
            <header className="align">
                <div className="align">
                    <img className="logo" src={logoImg} alt="logo" />
                </div>
                <div class="menu-section ">
                    <div class="menu-toggle">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link className="back-link" to="/home">
                                    <FiHome className="IconsHeader" size={16} color="#000" />
                                        Home
                                </Link>
                            </li>
                            <li>
                                <Link className="back-link" to="/register">
                                    <FiUser className="IconsHeader" size={16} color="#000" />
                                        Cadastro
                                </Link>
                            </li>
                            <li>
                                <Link className="back-link" to="/">
                                    <FiLogIn className="IconsHeader" size={16} color="#000" />
                                        Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/*Começo dos textos*/}
            {/*Quem somos*/}
            <div className="About-us">
                <FiUsers size={50} className="users" />
                <h3 className="h3">Quem somos?</h3>
                <p className="p">Somos uma plataforma digital que busca unir pessoas interessadas por um "bico" e pessoas que oferecem esses "bicos".</p>
                <p className="p">Sabemos que muitas vezes necessitamos de alguém que saiba realizar um determinado serviço em nossas casas e ou trabalho.
                Para isso é necessário chamar alguém que saiba resolver tal problema. Dessa forma,o prestador e o necessitado tem contato direto,
                podendo assim decidir suas maneiras de como será feito o "bico".</p>
            </div>

            {/*Nossas motivações*/}
            <div className="About-us-Reasons">
                <FiClipboard size={50} className="clipBoard" />
                <h3 className="h3"> Nossas Motivações </h3>
                <p className="p">
                    Nossa empresa busca melhorar a facilidade de encontrar e gerar serviços,
                    uma vez que, existem pessosas capacitadas a fazerem seviços. Por isso criamos um método
                    ágil e prático, facilitando a vida de pessoas que necessitam de um emprego de forma instantânea.
                </p>
            </div>

            {/*Nossos Objetivos*/}
            <div className="About-us-Objectives">
                <FiCheckCircle size={50} className="objectives" />
                <h3 className="h3">Nossos Objetivos</h3>
                <p className="p">
                    O Trampâe tem como objetivo principal o bem-estar das pessoas que acessam nossa plataforma,para assim divulgar
                    o maior número de pessoas que estejam disponibilizando bicos para a população.
                    Dessa forma, abrir o comércio de uma maneira totalmente inovadora, incentivando pessoas com diferentes tipos de dons,
                    exercendo diferentes tipos de trampos para no fim, seus bicos serem valorizados. </p>
            </div>
        </div>
    );
}