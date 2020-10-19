import React from 'react';

import { Container, ButtonChangePage, PerfilIcon, AboutUsIcon, LogOutIcon, TalkWithUsIcon } from './styles';

function ListPages() {
  return(
      <Container>

        <a href="profile">
        <ButtonChangePage>
          <PerfilIcon/>
          Perfil
        </ButtonChangePage>
        </a>

        <a href="/aboutus">
        <ButtonChangePage>
          <AboutUsIcon />
          Quem Somos
        </ButtonChangePage>
        </a>
    
        <a href="/talkwithus">
        <ButtonChangePage>
          <TalkWithUsIcon />
          Fale Conosco
        </ButtonChangePage>
        </a>
    
        <a href="/">
        <ButtonChangePage>
          <LogOutIcon />
          Sair
        </ButtonChangePage>
        </a>
        
      </Container>
  );
}

export default ListPages;