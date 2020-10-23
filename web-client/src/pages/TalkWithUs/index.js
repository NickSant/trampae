import React from 'react'
import NavBar from '../../components/Navbar'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import LandingImg from '../../assets/Landing.png'

import {
	Container,
	ContainerBanner,
	Title,
	IconEmail,
	IconPhone,
	Social,
} from './styles'

// import { Container } from '../../assets/GlobalStyles'

function TalkWithUs() {
	return (
		<>
			<NavBar />
			<Container>
				<ContainerBanner>
					<img src={LandingImg} size={30} alt="Landing" />
					<Title>Fale conosco e ajude a nossa plataforma a ser cada vez melhor</Title>
				</ContainerBanner>
				<img src={WhatsAppIcon} alt="whats" />
				<IconEmail />
				<IconPhone />
				
			</Container>
		</>
	)
}

export default TalkWithUs
