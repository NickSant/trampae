import React from "react";
import "./styles.css";

export default function input({ onChange, name, type }) {
  return (
    <input type={type} placeholder={name} onChange={onChange}/>
  );
}
