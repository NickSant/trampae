import React, { useState, useEffect } from "react";

import { Container, Title } from "./styles";
import Select from "../Select";
import ibge from "../../services/ibge";

export default function Filter() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selected]

  

  return (
    <Container>
      <Title> Filtrar Bicos </Title>
      <Select
        onChange={(e) => setSelectedUf(e.target.value)}
        name="UF"
        children={ufs.map((uf) => {
          return (
            <option key={uf} value={uf}>
              {uf}
            </option>
          );
        })}
      />
    </Container>
  );
}
