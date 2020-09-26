import React from "react";

import { Link } from "react-router-dom";

import IconImg from "../../assets/icon.png";

import "./styles.css";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="home-link" href="/">
          <img className="logo" src={IconImg} alt="icone" />
        </a>

        <a href="/new-service" className="btnNewService">
          Adicionar um novo serviço
        </a>
      </nav>
    </header>
  );
}
