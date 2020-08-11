import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

export default function LoginForm() {
  return (
    <container>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </container>
  );
}
