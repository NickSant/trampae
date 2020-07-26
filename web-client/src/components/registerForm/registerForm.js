import React from "react";
import "./styles.css";

export default function registerForm() {
  return (
    <container>
      <form className="form">
        <div className="registerForm">
          <div className="column">
            <input placeholder="Nome Completo"></input>
            <input type="Email" placeholder="E-mail"></input>

            <div className="input-password">
              <input name="senha" type="password" placeholder="Senha"></input>
            </div>

            <div className="input-password">
              <input type="password" placeholder="Confirmar senha"></input>
            </div>
          </div>
          <div className="column">
            <input type="tel" placeholder="WhatsApp"></input>

            <div className="input-group">
              <input placeholder="Cidade"></input>
              <input placeholder="UF" style={{ width: 80 }}></input>
            </div>
          </div>
        </div>
        <button className="button cadastrar">Cadastar</button>
      </form>
    </container>
  );
}
