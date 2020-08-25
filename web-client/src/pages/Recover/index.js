import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import Input from '../../components/Input';

require('dotenv/config');

export default function Recover() {
  const history = useHistory();

  const [confPass, setConfPass] = useState('');
  const [pass, setPass] = useState('');



  function submit(e) {
    e.preventDefault();

    if(pass !== confPass) return alert('As senhas precisam ser iguais');
    if(confPass.length < 6) return alert('A senha deve ter no mínimo 6 caracteres!');

    const mailToken = localStorage.getItem(process.env.REACT_APP_TOKEN_MAIL);
    const body = { newPass: confPass };
    const configs = {
      headers: {
        mail_auth: `Bearer ${mailToken}`,
      },
    };
    api.put('/forgot', body, configs).then((res) => {
      console.log('res',res)

      if(res.Error) return alert(res.Error)
      const user = res.data.currentUser;

      console.log('user', user)

      
      alert(`${user.name}, Sua senha foi alterada com sucesso`); //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
      localStorage.clear()
      setTimeout(function(){
        goToLogin();
      }, 2000)

    }).catch((e) => {
      alert(e);
      console.log(e);
    });
  }

  function goToLogin() {
    window.location = '/';
  }

  return (
    <div className='container'>
      <div className='box'>
        <div className='outra'>
          <div className='login-header'>
            <img src={logoImg} alt='Trampaê' />
          </div>
          <div className='form-container'>
            <h1 className='title'> Cadastre sua nova senha! </h1>

            <form>
              <Input
                onChange={(e) => setPass(e.target.value)}
                type='password'
                name='Senha'
              />
              <Input
                onChange={(e) => setConfPass(e.target.value)}
                type='password'
                name='Confirme sua Senha'
              />

              <button className='button' onClick={submit} type='submit'>
                Entrar
              </button>
            </form>
            <Link to='/forget' className='title'>
              Esqueceu a Senha?
            </Link>
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
