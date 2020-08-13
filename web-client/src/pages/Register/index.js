import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/logo.png";

import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";
import axios from "axios";

/* Função de Cadastro concluído*/

export default function Register() {
  const styles = {
    p: {
      color: "#cff8f9",
      fontSize: "26px",
    },
    cursorPointer: {
      cursor: "pointer",
    },
  };
  const refDiv = React.createRef();

  // campos que o frontend envia -> name, email, whatsapp, city, uf, password
  const [name, changeName] = useState("");
  const [email, changeMail] = useState("");
  const [whats, changeWhats] = useState("");
  const [password, changePass] = useState("");

  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedcity] = useState("");

  // ibge functions ----------------------------------------------------
  //get ufs
  const [ufs, setUfs] = useState([]);

  function getUfs() {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((response) => {
        const siglas = response.data.map((estado) => estado.sigla);

        console.log(siglas);

        setUfs(siglas);
      });
  }

  useEffect(getUfs, []);

  // Buscando as cidades da uf selecionada
  const [cities, setCities] = useState([]);
  function getCities() {
    console.log(selectedUf);

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/distritos?orderBy=nome`
      )
      .then((response) => {
        const cidades = response.data.map((cidade) => {
          delete cidade.municipio;
          return cidade;
        });

        console.log(cidades);

        setCities(cidades);
      });
  }

  useEffect(getCities, [selectedUf]);

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
        console.log(res);
        localStorage.clear();
        //confirmação
        localStorage.setItem("token", `Bearer ${res.data.token}`);

        refDiv.current.style.display = "flex";
        console.log(refDiv.current);
        setTimeout(() => {
          goToLogin();
        }, 20000);
      })
      .catch((e) => {
        localStorage.clear();
        console.log(e);
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
