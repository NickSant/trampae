import React from "react";
import "./styles.css";

export default function Select({ onChange, name, children }) {
  return (
    <select placeholder={name} onChange={onChange}>
        {children}
      </select>
  );
}
