import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiSun } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.png";
import logonImg from "../../assets/logonImg.png";

import Form from "../../components/loginForm/loginForm";

export default function Logon() {
  return (
    <div className="container">
      <div className="box">
        <div className="login">
          <div className="login-header">
            <img src={logoImg} alt="Trampaê"></img>
          </div>
          <div className="form-container">
            <h1 className="title"> Faça seu login! </h1>
            <Form />
          </div>
        </div>
        <div className="disabled-register">
          <h1 className="title"> Ainda não tem Login? </h1>
          <h3 className="title"> tá esperando o que?</h3>
          <button className="button"> Registre-se já</button>
        </div>
      </div>
    </div>
  );
}
