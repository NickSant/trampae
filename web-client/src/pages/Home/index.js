import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiSearch, FiHelpCircle, FiLogIn, FiUser, FiPhoneCall, FiPlusCircle } from 'react-icons/fi';
import IconImg from '../../assets/icon.png';
import ProfileImg from '../../assets/profile.png';
import UserImg from '../../assets/user.png';


export default function Home() {
    return (
        <div className="Home-container">
            <header className="header">
                <nav className="navbar">

                    <Link className="home-link" to="/">
                        <img className="Logo" src={IconImg} alt="icone" />
                    </Link>
                    <FiSearch size={25} className="iconsearch" />
                    <input className="search" placeholder="Pesquise os bicos da sua cidade">
                    </input>
                </nav>
            </header>
            <aside className="paginas">
                <div className="aprofile">
                    <img className="pprofile" src={ProfileImg} alt="profile" />
                    <div className="bProfile">
                        <h3 className="nameProfile">Bem-vindo, Pica Pau</h3>
                    </div>
                </div>
                {/*<hr className="horizontalLine" />*/}
                <Link className="volta-link" id="pAboutUs" to="/AboutUs">
                    <button className="btnPages">
                        <FiHelpCircle size={25} color="black" />
                            Quem Somos
                </button>
                </Link>
                <Link className="volta-link" id="pCad" to="/register">
                    <button className="btnPages">
                        <FiUser size={25} color="black" />
                            Cadastro
                </button>
                </Link>
                <Link className="volta-link" id="pLog" to="/">
                    <button className="btnPages">
                        <FiLogIn size={25} color="black" />
                            Login
                </button>
                </Link>

            </aside>
            <main className="principal">
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
                </ul>
            </main>

            <aside className="serviços">

                <Link  to="/service/new">
                    <button className="btnNewService">
                        Adicionar um novo serviço
                        <br />
                        <FiPlusCircle size={20} />
                    </button>
                </Link>
            </aside>
        </div>
    );
}