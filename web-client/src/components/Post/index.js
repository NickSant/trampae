import React from 'react';

import { Card, InformationsAboutUser, UserImage, UserName, UserCity, InforomationsAboutService, Title, Description, MoneyAndNumber, Money, ButtonWhatsApp } from './styles';
import userImg from '../../assets/user.png';
import WhatsAppIcon from '../../assets/whatsapp.svg';
import { useHistory } from 'react-router-dom';

function Post({user, serviceTitle, serviceDescription, servicePrice}) {
  const hist = useHistory()

  console.log(user)
  return(
    <Card>

      <InformationsAboutUser>
        <UserImage>
          <img onClick={() => hist.push('profile')} src={userImg} alt="userphoto" />
        </UserImage>

        <UserName>
          <h1>João Pedro</h1>
        </UserName>

        <UserCity>
          <h1>São Bernardo do Campo</h1>
        </UserCity>
      </InformationsAboutUser>

      <InforomationsAboutService>
        <Title>Limpeza</Title>
        <Description>Limpa minha casa por favor!</Description>
      </InforomationsAboutService>

      <MoneyAndNumber>
        <Money>
        <strong>R$ </strong><span>77,00</span>
        </Money>

        <ButtonWhatsApp>
          <button>
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </button>
        </ButtonWhatsApp>
      </MoneyAndNumber>
    </Card> 
  );
}

export default Post;