import React, { useState, useEffect } from "react";
import "./styles.css";
import "./stylesGrid1.css";
import "./stylesGrid2.css";
import "./stylesGrid3.css";
import { Link } from "react-router-dom";
import { FiSearch, FiHelpCircle, FiLogIn, FiUser } from "react-icons/fi";
import IconImg from "../../assets/icon.png";
import ProfileImg from "../../assets/profile.png";

import Service from "../../components/Post";

import api from "../../services/api";

export default function Home() {

  function clearStorage(){
    localStorage.clear();
  }
  const [services, setServices] = useState([]);

  async function concatData(service) {
    const userData = await getUserData(service.user_id);
    return { ...service, userData };
  }

  async function getUserData(userId) {
    const token = localStorage.getItem("token");
    const apiResponse = await api.get("/search/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
      params: {
        id: userId,
      },
    });
    return apiResponse.data[0];
  }

  useEffect(() => {
    async function getServicesData() {
      const apiResponse = await api.get("services");
      const data = apiResponse.data;

      const concatedData = await Promise.all(
        data.map((service) => {
          return concatData(service);
        })
      );

      setServices(concatedData);
    }
    getServicesData();
  }, []);

  return (
    <div className="Home-container">
      {/*Header e NavBar da página*/}
      <header className="header">
        <nav className="navbar">
          <Link className="home-link" to="/">
            <img className="logo" src={IconImg} alt="icone" />
          </Link>
          <FiSearch size={25} className="iconsearch" />
          <input
            className="search"
            placeholder="Pesquise os bicos da sua cidade"
          ></input>
        </nav>
      </header>

      {/*Grid da esquerda*/}
      <aside className="Grid1">
        <div className="div-center">
          <li>
            <p className="button-pages">
              <img className="Profile" src={ProfileImg} alt="profile" />
              <p className="text-button">Bem vindo, Pica-Pau</p>
            </p>
            <Link to="/aboutus">
              <p className="button-pages">
                <FiHelpCircle size={30} />
                <p className="text-button">Quem Somos</p>
              </p>
            </Link>
            <Link to="/register">
              <p className="button-pages">
                <FiUser size={30} />
                <p className="text-button">Cadastro</p>
              </p>
            </Link>
            <Link onClick={clearStorage} to="/">
              <p className="button-pages">
                <FiLogIn size={30} />
                <p className="text-button">Login</p>
              </p>
            </Link>
          </li>
        </div>
      </aside>

      {/*Grid do meio*/}
      <main className="Grid2">
        <ul className="cases">
          {services.map((service) => {
            return (
              <Service
                key={service.id}
                name={service.userData.name}
                city={service.city}
                category={service.category}
                text={service.description}
              />
            );
          })}
        </ul>
      </main>

      {/*Grid da direita*/}
      <aside className="serviços">
        <div className="right">
          <button className="btnNewService">Adicionar um novo serviço</button>
        </div>
      </aside>
    </div>
  );
}
