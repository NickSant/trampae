import React from "react";
import { Container } from "./styles.js";

export default function input({  name, type, ...rest }) {
  return (
    <Container  >
      <input type={type} {...rest}  placeholder={name} />
    </Container>
  );
}
