import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

import Input from "../../components/Input";

export default function Logon() {
  const refSuc = React.createRef();

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const [user, setUser] = useState({});

  // useEffect(
  //     () =>localStorage.getItem('token')  ? window.location = '/home' : localStorage.clear()
  //     ,[]
  // );

  function submit(e) {
    e.preventDefault();
    //convertendo para base64 - 'Basic Authentication' no server! - ver UserController
    // const data = `Basic ${btoa(mail)}:${btoa(pass)}`; btoa() - converte pra 64
    //maaas, estou convertendo no próprio onChange do input, por questões de segurança
    const basic = `Basic ${btoa(`${mail}:${pass}`)}`;

    console.log(basic);

    api
      .post(
        "/login",
        {}, //sim, esse objeto vai vazio mesmo, NÃO APAGA MANO!!!!
        {
          headers: {
            authorization: basic,
          },
        }
      )
      .then((res) => {
        localStorage.clear();
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        console.log(user);
        // console.log(refSuc.current)
        // refSuc.current.style.display = 'flex';
        setTimeout(() => {
          alert(`Parabéns ${user.name}, logou com sucesso`); //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
          goToHome();
        }, 4000);
      })
      .catch((e) => {
        localStorage.clear();
        console.log(e);
      });
  }

  function goToHome() {
    window.location = "/home";
  }

  return (
    <div className="container">
      <div className="box">
        <div className="login">
          <div className="login-header">
            <img src={logoImg} alt="Trampaê"></img>
          </div>
          <div className="form-container">
            <h1 className="title"> Faça seu login! </h1>
            <container>
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
            </container>
          </div>
        </div>
        <div className="disabled-register">
          <h1 className="title"> Ainda não tem Login? </h1>
          <h3 className="title"> Tá esperando o que?</h3>
          <Link className="button" to="/register">
            Registre-se já!
          </Link>
        </div>
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
