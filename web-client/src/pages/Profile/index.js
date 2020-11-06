import React, { useState, useEffect } from 'react'
import { Container, ProfileInfo, ProfileStats } from './styles'
import NavBar from '../../components/Navbar'
import ProfileImg from '../../assets/user.png'
import CoverBG from '../../assets/cover.jpg'

import { AiOutlineWhatsApp, AiOutlineMail, Ai } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FaRegHandshake } from 'react-icons/fa'

//---Começo do Front-end---//
function Profile() {
	// const [user, setUser] = useState({})
	const user = JSON.parse(localStorage.getItem('@Trampae:user'))
	// useEffect( () =>{
	// 	setUser(JSON.parse(localStorage.getItem('@Trampae:user')))
	// 	console.log(user)
	// }, [] )

	return (
		<Container>
			<NavBar />
			<ProfileInfo>
				<img src={CoverBG} alt="bg" className="background" />
				<img src={ProfileImg} alt="" className="profilePic" />

				<div className="profileInfo">
					<strong> Flavinho do Pneu </strong>
					<span> São Bernardo do Campo - SP </span>

					<br />
					<div className="bio">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis</p>
					</div>
				</div>
			</ProfileInfo>
			<ProfileStats>
				<div className="split-section">
					<div className="item-line">
						<div>
							<AiOutlineWhatsApp size={'2rem'} />
							<span>+55 11 927384758</span>
						</div>
						<div>
							<AiOutlineMail size={'2rem'} />
							<span>flavinho@pneu.com</span>
						</div>
					</div>

					<hr />

					<div className="item-line">
						<div>
							<BsFillBriefcaseFill size={'2rem'} />
							<span>
								serviços oferecidos: <strong> 12 </strong>
							</span>
						</div>
						<div>
							<FaRegHandshake size={'2rem'} />
							<span>
								serviços prestados: <strong> 17 </strong>
							</span>
						</div>
					</div>
				</div>
				<div className="split-section">
					<div className="service-item">
						
					</div>
				</div>
			</ProfileStats>
		</Container>
	)
}

export default Profile
