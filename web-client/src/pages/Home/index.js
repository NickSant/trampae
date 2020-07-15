import React from 'react';
import './styles.css';
import './stylesGrid1.css'
import './stylesGrid2.css'
import './stylesGrid3.css'
import { Link } from 'react-router-dom';
import { FiSearch, FiHelpCircle, FiLogIn, FiUser, FiPhoneCall, FiPlusCircle } from 'react-icons/fi';
import IconImg from '../../assets/icon.png';
import ProfileImg from '../../assets/profile.png';
import UserImg from '../../assets/user.png';


export default function Home() {
    return (
        <div className="Home-container">
            {/*Header e NavBar da página*/}
            <header className="header">
                <nav className="navbar">
                    <Link className="home-link" to="/">
                        <img className="logo" src={IconImg} alt="icone" />
                    </Link>
                    <FiSearch size={25} className="iconsearch" />
                    <input className="search" placeholder="Pesquise os bicos da sua cidade">
                    </input>
                </nav>
            </header>

            {/*Grid da esquerda*/}
            <aside className="Grid1">
                <div className="div-center">
                    <li>
                        <p className="button-pages">
                            <img className="Profile" src={ProfileImg} alt="profile" />
                            <p className="text-button">Bem vindo, Pica-Pau</p>
                        </p>
                        <Link to="/aboutus">
                            <p className="button-pages">
                                <FiHelpCircle size={30} />
                                <p className="text-button">Quem Somos</p>
                            </p>
                        </Link>
                        <Link to="/register">
                            <p className="button-pages">
                                <FiUser size={30} />
                                <p className="text-button">Cadastro</p>
                            </p>
                        </Link>
                        <Link to="/">
                            <p className="button-pages">
                                <FiLogIn size={30} />
                                <p className="text-button">Login</p>
                            </p>
                        </Link>
                    </li>
                </div>
            </aside>

            {/*Grid do meio*/}
            <main className="Grid2">
                <ul className="cases">
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Pedro Henrique</h3>
                        <h5 className="lUser">Mauá, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar a mihna casa quarta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Gustavo Mendes</h3>
                        <h5 className="lUser">São Bernardo, SP</h5>
                        <h3 className="cUser">Casa</h3>
                        <p className="tUser">Preciso de alguém para me ajudar a levar os móveis de casa para a mudança</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Henrique Camargo</h3>
                        <h5 className="lUser">Goiânia, GO</h5>
                        <h3 className="cUser">Casa</h3>
                        <p className="tUser">Preciso de alguém para cuidar do meu filho de segunda-feira à sexta-feira durante 10h</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Nicolas Santos</h3>
                        <h5 className="lUser">Ourinhos, SP</h5>
                        <h3 className="cUser">Manutenção</h3>
                        <p className="tUser">Preciso de alguém para me ajudar a consertar meu ventilador</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Pedro Henrique</h3>
                        <h5 className="lUser">Mauá, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar a mihna casa quarta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Gustavo Mendes</h3>
                        <h5 className="lUser">São Bernardo, SP</h5>
                        <h3 className="cUser">Casa</h3>
                        <p className="tUser">Preciso de alguém para me ajudar a levar os móveis de casa para a mudança</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Henrique Camargo</h3>
                        <h5 className="lUser">Goiânia, GO</h5>
                        <h3 className="cUser">Casa</h3>
                        <p className="tUser">Preciso de alguém para cuidar do meu filho de segunda-feira à sexta-feira durante 10h</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Nicolas Santos</h3>
                        <h5 className="lUser">Ourinhos, SP</h5>
                        <h3 className="cUser">Manutenção</h3>
                        <p className="tUser">Preciso de alguém para me ajudar a consertar meu ventilador</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                    <li className="list">
                        <img className="pUser" src={UserImg} alt="user" />
                        <h3 className="nUser">Vinicius Silva</h3>
                        <h5 className="lUser">Ouro Preto, SP</h5>
                        <h3 className="cUser">Limpeza</h3>
                        <p className="tUser">Preciso de alguém para limpar meu escritório quinta-feira</p>
                        <button className="btnWhats" >
                            <FiPhoneCall size={25} className="message" />
                        </button>
                    </li>
                </ul>
            </main>

            {/*Grid da direita*/}
            <aside className="serviços">
                <div className="right">
                    <Link to="/service/new">
                        <button className="btnNewService">
                            Adicionar um novo serviço
                        <br />
                            <FiPlusCircle size={20} />
                        </button>
                    </Link>
                    <main className="socialNetWork">
                        <h1 className="titleSocialNetWork">Redes Sociais</h1>
                    </main>
                </div>
            </aside>
        </div>
    );
}