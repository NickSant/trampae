import React from 'react';
import WhatsAppIcon from '../../assets/whatsapp.svg'; 
import { 
  Container,
  ProfilePicture,
  ProfileInformation,
  Bicos,
  Title,
  Stars,
  StarIcon,
  IconLocation,
  IconJob,
  InformationsAboutPerson
  } from './styles';
import NavBar from '../../components/Navbar';
import ProfileImg from '../../assets/user.png';


//---Começo do Front-end---//
function Profile() {
  return(
    <Container>
      <NavBar />

      <ProfilePicture>
        <img src={ProfileImg} alt="user" />
      </ProfilePicture>

      <ProfileInformation>
        <h1>João da Silva (JS) </h1>
        <p>Web Developer Junior HTML | CSS | JavaScript | ReactJS | Node.JS | </p>
        <hr />

      <InformationsAboutPerson>
        <IconLocation />
        <strong>São Bernardo do Campo</strong><span>SP</span>

        <IconJob />
        <strong>Total de trampos realizados: </strong><span>3</span>

        <img src={WhatsAppIcon}alt="whats" />
        <span>(11)978221343</span>
      </InformationsAboutPerson>

        <hr />

        <Bicos>
          <Title>Lavar Roupa</Title>
        <Stars>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stars>
        </Bicos>

        <Bicos>
          <Title>Design no DreamWeaver</Title>
        <Stars>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stars>
        </Bicos>

        <Bicos>
          <Title>Limpar Quintal</Title>
        <Stars>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stars>
        </Bicos>

        <Bicos>
          <Title>Limpar cachorro do vizinho</Title>
        <Stars>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Stars>
        </Bicos>

      </ProfileInformation>
  </Container>
  );
}

export default Profile;