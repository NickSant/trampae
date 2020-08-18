import React from 'react';

import { FiPhoneCall } from 'react-icons/fi';

import defaultUserImg from '../../assets/user.png';

const Service = ({name, city, category, text}) =>{
    return(
        <li className="list">
            <img className="pUser" src={defaultUserImg} alt="user" />
            <h3 className="nUser">{name}</h3>
            <h5 className="lUser">{city}</h5>
            <h3 className="cUser">{category}</h3>
            <p className="tUser">{text}</p>
            <button className="btnWhats" >
                <FiPhoneCall size={25} className="message" />
            </button>
        </li>
    );
}


export default Service;