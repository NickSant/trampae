import React from "react";
import { Container } from "./styles.js";

export default function input({ onChange, name, type }) {
  return (
    <Container>
    <input type={type} placeholder={name} onChange={onChange}/>
    </Container>
  );
}
