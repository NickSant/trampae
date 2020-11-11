import React from 'react'

import DevCard from '../../components/DevCard'

import NavBar from '../../components/Navbar'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import LandingImg from '../../assets/Landing.png'

import { Container } from './styles'
import Navbar from '../../components/Navbar'

import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

function TalkWithUs() {
	const NicolasAvatar = 'https://avatars0.githubusercontent.com/u/60119543?s=460&u=09214c01e7ab88ecf78eeefcaa8bc6cfc63a3386&v=4'
	const PHAvatar = 'https://scontent.fcgh35-1.fna.fbcdn.net/v/t1.0-9/54434056_2133600383400295_7572228712389672960_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=3M-k3YWnxPUAX-X3mqL&_nc_ht=scontent.fcgh35-1.fna&oh=a72d32fd434ef679e8e7879014db44e5&oe=5FD105CD'
	const ViniAvatar = 'https://scontent.fcgh35-1.fna.fbcdn.net/v/t1.0-9/91628442_893149107790044_2742898232714592256_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=OWOFbMDWCQ0AX9iKh_9&_nc_ht=scontent.fcgh35-1.fna&oh=65652c0307263a2baaaf689003337d3e&oe=5FD29559'
	const GabAvatar = 'https://instagram.fcgh35-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122500814_694699074483830_174888904638423204_n.jpg?_nc_ht=instagram.fcgh35-1.fna.fbcdn.net&_nc_ohc=LXIGaeydmi0AX-aedGF&_nc_tp=25&oh=c49bf99cf76f723319e4717aa975f4a9&oe=5FD41DAA'
	return (
		<Container>
			<Navbar />

			<div className="landing">
				<img src={LandingImg} alt="landing image" />
				<strong>Fale conosco e ajude nossa plataforma a melhorar e crescer</strong>

				<div className="indicator">
					<FiArrowDown size={'2rem'} />
				</div>
			</div>

			<div className="devsInfos">
				<h1>Nosso time de devs:</h1>
				<br />
				<div className="devs">
					<DevCard 
						name={'Nicolas Almeida'}
						location={'São Bernardo do Campo - SP'} 	
						photoUrl={NicolasAvatar} 
						linkInstagram={"https://www.instagram.com/sa.nicks/"}
						linkLinkedin={"https://www.linkedin.com/in/nicolas-santos17/"}
						linkGithub={"https://github.com/NickSant"}
					/>

					<DevCard 
						name={'Phelipe Omena'}
						location={'São Bernardo do Campo - SP'} 	
						photoUrl={PHAvatar} 
						linkInstagram={"https://www.instagram.com/phelipe.omena/"}
						linkLinkedin={'https://www.linkedin.com/in/phelipe-omena/'}
						linkGithub={'https://github.com/PhOmena'}
					/>

					<DevCard 
						name={'Gabriel Oliveira'}
						location={'São Bernardo do Campo - SP'} 	
						photoUrl={GabAvatar} 
						linkInstagram={'https://www.instagram.com/biel_oliveiras_/'}
						linkLinkedin={"https://www.linkedin.com/in//"}
						linkGithub={'https://github.com/GabrielSantos07'}
					/>

					<DevCard 
						name={'Vinícius Olímpio'}
						location={'Mauá - SP'} 	
						photoUrl={ViniAvatar} 
						linkInstagram={'https://www.instagram.com/viniolimpio3/'}
						linkLinkedin={'https://www.linkedin.com/in/vin%C3%ADcius-ol%C3%ADmpio-01749a177/'}
						linkGithub={"https://github.com/ViniOlimpio3"}
					/>
				</div>
			</div>
		</Container>
	)
}

export default TalkWithUs
