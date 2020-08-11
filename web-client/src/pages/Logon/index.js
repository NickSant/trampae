
import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiSun } from 'react-icons/fi'
import './styles.css';
import './responsive.css';
import logoImg from '../../assets/logo.png';
import logonImg from '../../assets/logonImg.png';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                {/*NavBar e header*/}
                <header>
                    <nav>
                        <button className="aboutUs-button">
                            <Link id="aboutUs" className="rota-link" to="/aboutus">
                                <p>
                                    Quem Somos?
                                </p>
                            </Link>
                        </button>
                        <button className="theme-button">
                            <FiSun size={20} />
                        </button>
                    </nav>
                </header>
                 {/*Meio do site*/}
                <img className="logo" src={logoImg} alt="logo" />
                <form>
                    <h1>Faça seu Login</h1>
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />

                    <Link className="back-link" to="/home">
                        <button className="button" type="submit">Entrar</button>
                    </Link>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#14b3b0" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            {/*trabalhadores*/}
            <div className="img">
                <img src={logonImg} alt="trabalhador" />
            </div>
        </div>
    );
}

// CONFLITO - NÃO APAGAR POR ENQUANTO
// import React from "react";
// import { Link } from "react-router-dom";
// import { FiLogIn, FiSun } from "react-icons/fi";
// import "./styles.css";
// import logoImg from "../../assets/logo.png";
// import logonImg from "../../assets/logonImg.png";

// import Form from "../../components/loginForm/loginForm";

// export default function Logon() {
//   return (
//     <div className="container">
//       <div className="box">
//         <div className="login">
//           <div className="login-header">
//             <img src={logoImg} alt="Trampaê"></img>
//           </div>
//           <div className="form-container">
//             <h1 className="title"> Faça seu login! </h1>
//             <Form />
//           </div>
//         </div>
//         <div className="disabled-register">
//           <h1 className="title"> Ainda não tem Login? </h1>
//           <h3 className="title"> tá esperando o que?</h3>
//           <button className="button"> Registre-se já</button>
//         </div>
//       </div>
//     </div>
//   );
// }
