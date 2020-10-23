import React, { useState, useEffect } from 'react'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import { Container, ProfilePicture, ProfileInformation, Bicos, Title, Stars, StarIcon, IconLocation, IconJob, InformationsAboutPerson } from './styles'
import NavBar from '../../components/Navbar'
import ProfileImg from '../../assets/user.png'


//---Começo do Front-end---//
function Profile() {
	// const [user, setUser] = useState({})
	const user = JSON.parse(localStorage.getItem('@Trampae:user')) 
	// useEffect( () =>{
	// 	setUser(JSON.parse(localStorage.getItem('@Trampae:user'))) 
	// 	console.log(user)
	// }, [] )
	
	return (
		<>
			<NavBar />
			<Container>

				<ProfilePicture>
					<img src={ProfileImg} alt="user" />
				</ProfilePicture>

				<ProfileInformation>
				
					<h1>  </h1>
					<p> Web Developer Junior HTML | CSS | JavaScript | ReactJS | Node.JS </p>
					<hr />
					
					<InformationsAboutPerson>
						<div>
							<IconLocation />
							<strong>São Bernardo do Campo</strong>
							<span>SP</span>
						</div>

						<div>
							<IconJob />
							<strong>Total de trampos realizados: </strong>
							<span>3</span>
						</div>
						<div>
							<img src={WhatsAppIcon} alt="whats" />
							<span>(11)978221343</span>
						</div>
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
		</>
	)
}

export default Profile
