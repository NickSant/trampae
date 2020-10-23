import React, { useState, useEffect } from "react"
import "./styles.js"
import { 
  Container, 
  ContainerLeft, 
  FormContainer, 
  InputEmail 
} from './styles' 

import LogoImg from "../../assets/logo.png"

import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import api from "../../services/api"




//---Começo API---//
require('dotenv/config')

export default function Forget() {
  const history = useHistory()

  const [mail, setMail] = useState('')

  function submit(e) {
    e.preventDefault()

    if(mail === undefined || mail === '') return alert('Você deve preencher o campo para prosseguir!')
    else if(!mail.includes('@') && !mail.includes('.')) return alert('E-mail inválido!')

    const body = {mail: mail}

    api.post('/forgot', body).then((res) => {

      if(res.Error) console.log(`Erro: ${res}`)
      
      localStorage.clear()

      const mail_auth_token = res.data.auth_token

      setTimeout(() => { 
        alert(res.data.message) //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
      
        goToLogin()
      }, 3000)

    }).catch((e) => {
      localStorage.clear()
      console.log(e)

      alert(e)

    })
  }

  function goToLogin() {
    history.push('/')
  }

  return (
      <Container>
        
        <ContainerLeft>
          <h1>Recupere sua senha e junte-se a nossa comunidade!</h1>
        </ContainerLeft>
             
        <FormContainer>
          <img src={LogoImg} alt="Logo" />
          <h1>Digite seu email aqui!</h1>
          <InputEmail type="email" onChange={e => setMail(e.target.value)} placeholder="E-mail"/>
          <a onClick={submit} type='submit' >Solicitar troca de senha</a>
          <a href="/">Voltar para o login</a>
        </FormContainer>
      </Container>
  )
}
