import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import ibge from "../../services/ibge";
import api from "../../services/api";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import logoImg from "../../assets/logo.png";

export default function NewService() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [selectedUf, setSelectedUf] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function getUfs() {
      const ufs = await ibge.getUfs();
      setUfs(ufs);
    }
    getUfs();
  });
  useEffect(() => {
    async function getCities() {
      const cities = await ibge.getCities(selectedUf);
      setCities(cities);
    }
    getCities();
  }, [selectedUf]);

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      title: title,
      description: description,
      price: price,
      number_participants: 1, //hardcoded
      id_category: 1, //hardcoded
      uf: selectedUf,
      city: selectedCity,
    };

    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    api
      .post("services", body, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("Serviço cadastrado com sucesso");

        window.location = "/home";
      });


  }

  return (
    <div className="container">
      <div className="wrapper-box">
        <header>
          <img src={logoImg} alt="Trampaê"></img>
          <h1 className="title">Publique o seu bico!</h1>
        </header>
        <div className="content-wrapper">
          <form>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="Título"
            />
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="Descrição"
            />
            <div className="small-input-wrapper">
              <Input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                name="Pagamento"
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
                onChange={(e) => setSelectedCity(e.target.value)}
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

            <div className="button-wrapper">
              <Link className="button secondary" to="/home">
                Voltar
              </Link>
              <button onClick={handleSubmit} type="submit" className="button">
                {" "}
                Publicar{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
