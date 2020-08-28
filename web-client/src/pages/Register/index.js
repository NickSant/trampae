import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/logo.png";

import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import ibge from "../../services/ibge";

require("dotenv/config");

export default function Register() {
  const refDiv = React.createRef();

  // campos que o frontend envia -> name, email, whatsapp, city, uf, password
  const [name, changeName] = useState("");
  const [email, changeMail] = useState("");
  const [whats, changeWhats] = useState("");
  const [password, changePass] = useState("");

  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedcity] = useState("");

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  // ibge functions ----------------------------------------------------
  //get ufs

  useEffect(() => {
    async function getUfsOnIBGE() {
      const ufs = await ibge.getUfs();
      setUfs(ufs);
    }
    getUfsOnIBGE();
  }, []);

  useEffect(() => {
    async function getCitiesOnIBGE() {
      const cities = await ibge.getCities(selectedUf);
      setCities(cities);
    }
    getCitiesOnIBGE();
  }, [selectedUf]);

  //  SUBMIT- -----------------------------

  async function submitRegister(e) {
    //fazer conexão com api......
    e.preventDefault();
    //name, email, whatsapp, city, uf, password
    const body = {
      name: name,
      email: email,
      whatsapp: whats,
      password: password,
      city: selectedCity,
      uf: selectedUf,
    };

    console.log(body);

    api
      .post("/signup", body)
      .then((res) => {
        console.log(res,'res');
        localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
        //confirmação
        localStorage.setItem(
          process.env.REACT_APP_TOKEN_KEY,
          `Bearer ${res.data.token}`
        );

        setTimeout(() => {
          goToLogin();
        }, 2000);
      })
      .catch((e) => {
        localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY)

        const res = e.request;
        console.log(res, 'err')
        // if(res.status === 401)  alert('Faça o login antes de entrar')

        const {Error} = JSON.parse(res.responseText)

        alert(Error)

        // handleError(e.request.requestText, 3000)
      });
  }
  function goToLogin() {
    window.location = "/";
  }

  /*Começo da pagina*/
  return (
    <>
      <div className="container">
        <div className="box">
          <div className="disabled-register">
            <h1 className="title"> Já tem registro? </h1>
            <h3 className="title">
              {" "}
              Vem logo, faça login e encontro novos bicos!
            </h3>
            <Link className="button" to="/">
              {" "}
              Login{" "}
            </Link>
          </div>
          <div className="signup">
            <div className="signup-header">
              <img src={logoImg} alt="Trampaê"></img>
              <h1 className="title"> Registre-se já! </h1>
            </div>
            <div className="form-container">
              <form className="form">
                <div className="registerForm">
                  <Input
                    type="text"
                    name="Nome Completo"
                    onChange={(e) => changeName(e.target.value)}
                  />
                  <Input
                    type="Email"
                    name="E-mail"
                    onChange={(e) => changeMail(e.target.value)}
                  />
                  <Input
                    type="pasword"
                    name="Senha"
                    onChange={(e) => changePass(e.target.value)}
                  />
                  <Input type="password" name="Confirmar Senha" />
                  <Input
                    type="tel"
                    name="Whatsapp"
                    onChange={(e) => changeWhats(e.target.value)}
                  />

                  <Select
                    onChange={(e) => setSelectedUf(e.target.value)}
                    name="UF"
                    children={ufs.map((uf) => {
                      return (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      );
                    })}
                  ></Select>

                  <Select
                    onChange={(e) => setSelectedcity(e.target.value)}
                    name="cidade"
                    children={cities.map((city) => {
                      return (
                        <option key={city.id} value={city.nome}>
                          {city.nome}
                        </option>
                      );
                    })}
                  ></Select>
                </div>

                <button
                  type="submit"
                  className="Button"
                  onClick={submitRegister}
                >
                  Cadastar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
