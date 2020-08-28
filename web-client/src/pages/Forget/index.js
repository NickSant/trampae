import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import "./styles.css";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

import Input from "../../components/Input";
require('dotenv/config');

export default function Forget() {
  const history = useHistory();

  const [mail, setMail] = useState("");

  const [user, setUser] = useState({});

  function submit(e) {
    e.preventDefault();

    const body = {mail: mail}

    api.post('/forgot', body).then((res) => {

      if(res.Error){
        // temporário
        console.log('erro');
      }

      localStorage.clear();
      const mail_auth_token = res.data.auth_token;
      localStorage.setItem( process.env.REACT_APP_TOKEN_MAIL , mail_auth_token);

      setTimeout(() => { 

        alert(res.data.message); //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
        goToLogin();

      }, 3000);

    }).catch((e) => {

      localStorage.clear();
      console.log(e);
      alert('Não foi possível Enviar o email.\nTente novamente mais tarde.');

    });
  }

  function goToLogin() {
    history.push('/');
  }

  return (
    <div className="container">
      <div className="box">
        <div className="outra">
          <div className="login-header">
            <img src={logoImg} alt="Trampaê"></img>
          </div>
          <div className="form-container">
            <h1 className="title"> Digite seu email! </h1>
          
            <form>
              <Input
                onChange={ e => setMail(e.target.value)}
                type="email"
                name="E-mail"
              />
              <button
                className="back-link"
                onClick={submit}
                className="button"
                type="submit"
              >
                Entrar
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}
// CONFLITO - NÃO APAGAR POR ENQUANTO
// import React from "react";
// import { Link } from "react-router-dom";
// import { FiLogIn, FiSun } from "react-icons/fi";
// import "./styles.css";
// import logoImg from "../../assets/logo.png";
// import logonImg from "../../assets/logonImg.png";

// export default function Logon() {
//   return (
//     <div className="container">
//       <div className="box">
//         <div className="login">
//           <div className="login-header">
//             <img src={logoImg} alt="Trampaê"></img>
//           </div>
//           <div className="form-container">
//             <h1 className="title"> Faça seu login! </h1>
//             <Form />
//           </div>
//         </div>
//         <div className="disabled-register">
//           <h1 className="title"> Ainda não tem Login? </h1>
//           <h3 className="title"> tá esperando o que?</h3>
//           <button className="button"> Registre-se já</button>
//         </div>
//       </div>
//     </div>
//   );
// }
