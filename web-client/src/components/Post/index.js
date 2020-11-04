import React from 'react';

import { Card, InformationsAboutUser, UserImage, UserName, UserCity, InforomationsAboutService, Title, Description, MoneyAndNumber, Money, ButtonWhatsApp } from './styles';
import userImg from '../../assets/user.png';
import WhatsAppIcon from '../../assets/whatsapp.svg';
import { useHistory } from 'react-router-dom';

function Post({user, serviceTitle, serviceDescription, servicePrice}) {
  const hist = useHistory()
  return(
    <Card>
 
      <InformationsAboutUser>
        <UserImage>
          <img onClick={() => hist.push('profile')} src={user.image_url} alt="userphoto" />
        </UserImage>

        <UserName>
          <h1>{user.name}</h1>
        </UserName>

        <UserCity>
          <h1>{user.city}</h1>
        </UserCity>
      </InformationsAboutUser>

      <InforomationsAboutService>
        <Title>{serviceTitle}</Title>
        <Description>{serviceDescription}</Description>
      </InforomationsAboutService>

      <MoneyAndNumber>
        <Money>
        <strong>R$ </strong><span>{servicePrice}</span>
        </Money>

        <ButtonWhatsApp>
          <a>Ver mais</a>
          <button>
            <img src={WhatsAppIcon} alt="WhatsApp" />
          </button>
        </ButtonWhatsApp>
      </MoneyAndNumber>
    </Card> 
  );
}

export default Post;