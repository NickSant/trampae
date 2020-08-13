import React from "react";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

export default function input({ onChange, name, type }) {
  return (
    <input type={type} placeholder={name} onChange={onChange}/>
  );
}
