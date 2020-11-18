import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container,
    ContainerPost,
    IconsContainer,
    Footer,
    } from './styles';

import { FiUsers, FiClipboard, FiCheckCircle } from 'react-icons/fi';
import NavBar from '../../components/Navbar'
import TrampaeLogo from '../../assets/logo.png';

export default function AboutUs() {
    return (
        <Container>
            <NavBar />
            <div className="logoDiv">
                <img src={TrampaeLogo} alt="Logo" />
            </div>
            {/* QUEM SOMOS */}
            <ContainerPost>
                <IconsContainer>
                <FiUsers size={50} className="users" />
                </IconsContainer>
                <h3 className="h3">Quem somos?</h3>
                <p className="p">Somos uma plataforma digital que busca unir pessoas interessadas por um serviço informal e pessoas que oferecem esses "bicos".</p>
                <p className="p">Sabemos que muitas vezes necessitamos de alguém que saiba realizar um determinado serviço em nossas casas 
                e ou trabalho. Para isso é necessário chamar alguém que saiba resolver tal problema.</p>
            </ContainerPost>

            {/*NOSSAS MOTIVAÇÕES*/}
            <ContainerPost>
                <IconsContainer>
                <FiClipboard size={50} className="clipBoard" />
                </IconsContainer>
                <h3 className="h3">Nossas Motivações</h3>
                <p className="p">
                    Nossa empresa busca melhorar a facilidade de encontrar e gerar serviços,
                    uma vez que, existem pessosas capacitadas a fazerem seviços. Por isso criamos um método
                    ágil e prático, facilitando a vida de pessoas que necessitam de um emprego de forma instantânea.
                </p>
            </ContainerPost>

            {/*NOSSOS OBJETIVOS*/}
            <ContainerPost>
                <IconsContainer>
                <FiCheckCircle size={50} className="objectives" />
                </IconsContainer>
                <h3 className="h3">Nossos Objetivos</h3>
                <p className="p">
                    O Trampâe tem como objetivo principal o bem-estar das pessoas que acessam nossa plataforma,para assim divulgar
                    o maior número de pessoas que estejam disponibilizando bicos para a população.
                    Dessa forma, abrir o comércio de uma maneira totalmente inovadora, incentivando pessoas com diferentes tipos de dons,
                    exercendo diferentes tipos de trampos para no fim, seus bicos serem valorizados. </p>
            </ContainerPost>


            {/* FOOTER */}
            <Footer>
                <h1>Quer saber mais? Tem alguma dúvida ou sugestão? Fale com a gente...</h1>
                <Link to="/talkwithus" className='button secondary'>
                    Fale conosco
                </Link>
            </Footer>
        </Container>
    );
}