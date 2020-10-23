import React from "react";
import { Container } from "./styles.js";

export default function Select({ onChange, name, children }) {
  return (
    <Container>
    <select placeholder={name} onChange={onChange}>
        {children}
      </select>
      </Container>
  );
}
