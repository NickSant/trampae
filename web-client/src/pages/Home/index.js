import React, { useState, useEffect } from "react";
import "./styles.css";
import "./stylesGrid1.css";
import "./stylesGrid2.css";
import "./stylesGrid3.css";
import { Link, useHistory } from "react-router-dom";
import {FiHelpCircle, FiLogIn, FiUser } from "react-icons/fi";
import ProfileImg from "../../assets/profile.png";

import Service from "../../components/Post";
import Navbar from "../../components/Navbar";

import api from "../../services/api";

import Util from '../../helpers/Util';

require('dotenv/config');

export default function Home() {

  
  const history = useHistory();

  useEffect(() => !Util.isAuthenticated('token') ? history.push('/') : '', []);

  function clearStorage(){
    localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
  }
  const [services, setServices] = useState([]);

  async function concatData(service) {
    const userData = await getUserData(service.user_id);
    return { ...service, userData };
  }

  async function getUserData(userId) {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
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
      {/*Grid da esquerda*/}
      <Navbar />
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
                user_name={service.userData.name}
                title={service.title}
                price={service.price}
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
          
        </div>
      </aside>
    </div>
  );
}
