import React from 'react';
import NavBar from '../../components/Navbar';
import WhatsAppIcon from '../../assets/whatsapp.svg';
import LandingImg from '../../assets/Landing.png';

import { 
    Container,
    ContainerBanner,
    Title,
    IconEmail,
    IconPhone
    } from './styles';

//---Começo do Front-end---//
function TalkWithUs() {
  return(
      <Container>
        <NavBar />
        <ContainerBanner>
            <img src={LandingImg} size={30} alt="Landing" />
            <Title>Fale conosco e ajude a nossa plataforma 
              a ser cada vez melhor</Title>
        </ContainerBanner>

        <hr />
        
        <img src={WhatsAppIcon} alt="whats" />
        <IconEmail />
        <IconPhone />
      </Container>
  );
}

export default TalkWithUs;