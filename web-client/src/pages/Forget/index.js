import React, { useState, useEffect } from "react";
import "./styles.js";
import { 
      Container, 
      ContainerLeft, 
      FormContainer, 
      InputEmail 
      } from './styles'; 

import LogoImg from "../../assets/logo.png";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";




//---Começo API---//
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

//---Final API---//

//---Começo do Front-end---//
  return (
      <Container>
        
        <ContainerLeft>
          <h1>Recupere sua senha e junte-se a nossa comunidade!</h1>
        </ContainerLeft>
             
        <FormContainer>
          <img src={LogoImg} alt="Logo" />
          <h1>Digite Seu email Aqui!</h1>
          <InputEmail placeholder="E-mail"/>
          <a>Solicitar troca de senha</a>
          <a href="/">Voltar para o login!</a>
        </FormContainer>
      </Container>
  );
}
