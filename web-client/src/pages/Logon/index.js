
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FiLogIn, FiSun, FiCheckSquare } from 'react-icons/fi'

import './styles.css';
import './responsive.css';
import logoImg from '../../assets/logo.png';
import logonImg from '../../assets/logonImg.png';
import api from '../../services/api';


export default function Logon() {

    const refSuc = React.createRef();
    
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const [user, setUser] = useState({});


        // useEffect(
        //     () =>localStorage.getItem('token')  ? window.location = '/home' : localStorage.clear()
        //     ,[]
        // );

    function submit(e){
        e.preventDefault();
        //convertendo para base64 - 'Basic Authentication' no server! - ver UserController
        // const data = `Basic ${btoa(mail)}:${btoa(pass)}`; btoa() - converte pra 64
        //maaas, estou convertendo no próprio onChange do input, por questões de segurança 
        const basic = `Basic ${btoa(`${mail}:${pass}`)}`;

        console.log(basic);

        api.post('/login', {},//sim, esse objeto vai vazio mesmo, NÃO APAGA MANO!!!!
        {
            headers:{
                'authorization': basic,
            }
        })
        .then( res =>{
            localStorage.clear();
            console.log(res.data);

            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            console.log(user);
            // console.log(refSuc.current)
            // refSuc.current.style.display = 'flex';
            setTimeout(() => {
                alert(`Parabéns ${user.name}, logou com sucesso`);//alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
                goToHome();
            }, 4000);

        })
        .catch( e =>{
            localStorage.clear();
            console.log(e)
        })

    }

    function goToHome() {
        window.location = '/home';
    }



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
                    <input 
                        onChange={ e => setMail( e.target.value ) }
                        type="email" 
                        placeholder="E-mail" 
                    />
                    <input 
                        onChange={ e => setPass( e.target.value ) }
                        type="password" 
                        placeholder="Senha" 
                    />

                    <button className="back-link" onClick={submit} className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#14b3b0" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            {/*Função do cadastro concluído*/}
            <div style={{display:'none'}}  onClick={goToHome} ref={refSuc} className="hide">
                <div>
                    <FiCheckSquare size={100} />
                    <div>
                    <h1>Parabéns {user.name}</h1>
                        <p >Aguarde para ser redirecionado para a Home!</p>
                    </div>
                </div>
            </div>


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
