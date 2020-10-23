import React from 'react';

import { Container, Title, Card, Select, TrashIcon } from './styles';

function Filter() {
  return(
      <Container>
        <Card>
        <Title>Filtrar Bicos</Title>
        <TrashIcon />
        <p>Estado</p>
        <Select />
        <p>Cidade</p>
        <Select />

        <button>Filtrar</button>
        </Card>
      </Container>
  );
}

export default Filter;