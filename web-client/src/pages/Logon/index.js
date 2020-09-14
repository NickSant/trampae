import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

import Input from "../../components/Input";
import Error from "../../components/Error";

import {
  Box,
  ActiveSection,
  Header,
  FormContainer,
  Title,
  DisabledSection,
} from "./styles";

require("dotenv/config");

export default function Logon() {
  const history = useHistory();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState({});

  function submit(e) {
    e.preventDefault()
    const basic = `Basic ${btoa(`${mail}:${pass}`)}`
    api.post(
      "/login",
      {}, //sim, esse objeto vai vazio mesmo, NÃO APAGA MANO!!!!
      {
        headers: {
          authorization: basic,
        },
      }
    ).then((res) => {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)
      console.log('data',res.data)

      localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, res.data.token)
      console.log('user ',res.data.user)
      setUser(res.data.user)
      console.log(user)

      setTimeout(() => {
        alert(`Parabéns ${res.data.user.name}, logou com sucesso`) 
        //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!! - alerts param a thread principal de um server node
        goToHome()
      }, 1000)
    }).catch((e) => {
      localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)

      const res = e;
      console.log(res, 'err')
      // if(res.status === 401)  alert('Faça o login antes de entrar')

      

      alert(res)

      // handleError(e.request.requestText, 3000)
    
    })
  }

  function goToHome() {
    history.push("/home");
  }

  return (
    <Box>
      <ActiveSection>
        <Header>
          <img src={logoImg} width={125} alt="Trampaê"></img>
        </Header>

        <FormContainer>
          <Title> Faça seu login! </Title>

          <form>
            <Input
              onChange={(e) => setMail(e.target.value)}
              type="email"
              name="E-mail"
            />
            <Input
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="Senha"
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
          <Link to="/forget" className="title">
            Esqueceu a Senha?
          </Link>
        </FormContainer>
      </ActiveSection>

      <DisabledSection>
        <h1 className="title"> Ainda não tem Login? </h1>
        <h3 className="title"> Tá esperando o que?</h3>
        <Link className="button" to="/register">
          Registre-se já!
        </Link>
      </DisabledSection>
    </Box>
  );
}
