import React from 'react'
import NavBar from '../../components/Navbar'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import LandingImg from '../../assets/Landing.png'

import { Container, DevCard } from './styles'
import Navbar from '../../components/Navbar'

import { FiArrowDown } from 'react-icons/fi';

// import { Container } from '../../assets/GlobalStyles'

function TalkWithUs() {
	return (
		<Container>
			<Navbar />

			<div className="landing">
				<img src={LandingImg} alt="landing image" />
				<strong>Fale conosco e ajude nossa plataforma a melhorar e crescer</strong>

				<div className="indicator">
					<FiArrowDown size={"2rem"}/>
				</div>
			</div>

			<div className="devsInfos">
				<DevCard />
			</div>
		</Container>
	)
}

export default TalkWithUs
