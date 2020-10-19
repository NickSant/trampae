import React from "react";
import { Link } from 'react-router-dom';
import { 
  NavBar, 
  LogoTrampae, 
  IconSearch,
  ContainerLeft,
  ContainerMiddle,
  ContainerRight,
  Profile,
  IconHome,
  IconUser,
  IconHelp,
  IconPhone,
  IconPlus,
  IconGetOut
  } from './styles'

import IconTrampae from "../../assets/icon.png";
import ProfileImg from "../../assets/profile.png";
import "./styles.js";

//---Começo do Front-end---//
export default function Navbar() {
  return (
    <NavBar>

      {/* Container da esquerda */}
      <ContainerLeft>
        <LogoTrampae>
          <a href="/home">
            <img src={IconTrampae} alt="logo" /> 
          </a>
        </LogoTrampae>
        
        <button>
        <IconSearch />
          <p>Buscar Bicos Na sua região</p>
        </button>
      </ContainerLeft>
   
      {/* Container do meio */}
      <ContainerMiddle>
        <Link to="/home">
        <IconHome />
        </Link>

        <Link to="/profile">
        <IconUser />
        </Link>

        <Link to="/aboutus">
        <IconHelp />
        </Link>

        <Link to="/talkwithus">
        <IconPhone />
        </Link>

        <Link to="/">
        <IconGetOut />
        </Link>
      </ContainerMiddle>

      {/* Container da direita */}
      <ContainerRight>
      <Link to="/new-service" className="buttonNewService">
        <IconPlus />
        <p>Adicionar novo bico</p>
      </Link>

      <Profile>
        <a href="/profile">
        <img src={ProfileImg} alt="profile" />
        </a>
      </Profile>

      </ContainerRight>
    </NavBar>

  );
}
