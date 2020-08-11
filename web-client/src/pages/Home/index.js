import React from 'react';
import './styles.css';
import './stylesGrid1.css'
import './stylesGrid2.css'
import './stylesGrid3.css'
import { Link } from 'react-router-dom';
import { FiSearch, FiHelpCircle, FiLogIn, FiUser, FiPhoneCall } from 'react-icons/fi';
import IconImg from '../../assets/icon.png';
import ProfileImg from '../../assets/profile.png';
import UserImg from '../../assets/user.png';


import Service from '../../components/Service';


export default function Home() {

    //TEMPORÁRIO!!!
    const data_temp = [
        {id:'1', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'2', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'3', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'4', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'5', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'6', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'7', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'8', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'9', name:'Pedro Henrique', city:'Mauá - SP', category:'Limpeza', text:'Preciso de Alguém pra limpar minha casa na quarta-feira'},
        {id:'10', name:'Nicolas', city:'São Bernardo', category:'Programação', text:'Preiciso de um programador bom'},
        {id:'11', name:'Nicolas', city:'São Bernardo', category:'Programação', text:'Preiciso de um programador bom'},
        {id:'12', name:'Nicolas', city:'São Bernardo', category:'Programação', text:'Preiciso de um programador bom'},
        {id:'13', name:'Nicolas', city:'São Bernardo', category:'Programação', text:'Preiciso de um programador bom'},
    ]
    
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
                    {data_temp.map( service => {
                        return(
                            <Service 
                                key={service.id}
                                name={service.name} 
                                city={service.city} 
                                category={service.category} 
                                text={service.text} 
                            />
                        );

                    } )}
                        
                </ul>
            </main>

            {/*Grid da direita*/}
            <aside className="serviços">
                <div className="right">
                        <button className="btnNewService">
                            Adicionar um novo serviço
                        </button>
                    
                    
                </div>
            </aside>
        </div>
        
    );
}