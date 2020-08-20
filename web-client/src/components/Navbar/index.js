import React from "react";

import { Link } from 'react-router-dom';

import IconImg from "../../assets/icon.png";

import "./styles.css";

export default function Navbar() {
  return (
    <header className="header">
        <nav className="navbar">
          <Link className="home-link" to="/">
            <img className="logo" src={IconImg} alt="icone" />
          </Link>
          
          <button className="btnNewService">Adicionar um novo serviço</button>
        </nav>
      </header>
  );
}
