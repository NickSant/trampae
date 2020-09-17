import React from "react";

import defaultUserImg from "../../assets/user.png";
import whatsappIcon from "../../assets/whatsapp.svg";

import "./styles.css";

const Service = ({ user_name, title, price, city, category, text }) => {
  return (
    <li className="list">
      <img className="pUser" src={defaultUserImg} alt="user" />
      <h3 className="nUser">{user_name}</h3>
      <h5 className="lUser">{city}</h5>
      <h3 className="cUser">{category}</h3>
  <strong className="tUser">{title}</strong>
      <p className="tUser">{text}</p>
      <footer>
        <strong>
          Pagamento: R$ <span>{price}</span>
        </strong>
        <button className="btnWhats">
          <img src={whatsappIcon} alt="whatsapp"></img>
        </button>
      </footer>
    </li>
  );
};

export default Service;
