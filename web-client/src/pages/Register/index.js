import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCheckSquare } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.png";

import SignUpForm from "../../components/registerForm/registerForm";

/* Função de Cadastro concluído*/

export default function Register() {
  /*const styles = {
        p: {
            color: '#cff8f9',
            fontSize: '26px',
        },
        cursorPointer: {
            cursor: 'pointer',
        }
    }
    const refDiv = React.createRef();

    function submitRegister(e) {
        //fazer conexão com api......
        e.preventDefault();
        refDiv.current.style.display = 'flex';
        console.log(refDiv.current)
        setTimeout(() => {
            goToHome();
        }, 1500)

    }
    function goToHome() {
        window.location = '/'
    }

    /*Começo da pagina*/
  return (
    <div className="container">
      <div className="box">
        <div className="disabled-register">
          <h1 className="title"> Já tem registro? </h1>
          <h3 className="title">
            {" "}
            vem logo, faça login e encontro novos bicos!
          </h3>
          <button className="button"> Login </button>
        </div>
        <div className="signup">
          <div className="signup-header">
            <img src={logoImg} alt="Trampaê"></img>
            <h1 className="title"> Registre-se já! </h1>
          </div>
          <div className="form-container">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
