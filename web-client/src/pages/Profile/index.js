import React, { useState, useEffect } from 'react'
import { Container, ProfileInfo, ProfileStats } from './styles'
import NavBar from '../../components/Navbar'
import ProfileImg from '../../assets/user.png'
import CoverBG from '../../assets/cover.jpg'

import { AiOutlineWhatsApp, AiOutlineMail, AiFillStar } from 'react-icons/ai'
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
				<div className="split-section scrollable">
					<div className="service-item">
						<div className="votingPerson">
							<img src={ProfileImg} alt="profilePic" className="profilePic" />
							<div>
								<strong> Jorge Jesus </strong>
								<span> São Bernardo do Campo </span>
							</div>
						</div>

						<div className="service-info">
							<strong> Instalar Windows 10 </strong>
							<span>
								{' '}
								4.5 <AiFillStar size={'2rem'} />{' '}
							</span>
						</div>
					</div>

					<div className="service-item">
						<div className="votingPerson">
							<img src={ProfileImg} alt="profilePic" className="profilePic" />
							<div>
								<strong> Agnaldo Timótio </strong>
								<span> Diadema </span>
							</div>
						</div>

						<div className="service-info">
							<strong> Formatar PC </strong>
							<span>			
								5 <AiFillStar size={'2rem'} />
							</span>
						</div>
					</div>

					<div className="service-item">
						<div className="votingPerson">
							<img src={ProfileImg} alt="profilePic" className="profilePic" />
							<div>
								<strong> Mark Zuckerberg </strong>
								<span> Pindamonhangaba </span>
							</div>
						</div>

						<div className="service-info">
							<strong> Destravar Xbox  </strong>
							<span>			
								4.8 <AiFillStar size={'2rem'} />
							</span>
						</div>
					</div>

					<div className="service-item">
						<div className="votingPerson">
							<img src={ProfileImg} alt="profilePic" className="profilePic" />
							<div>
								<strong> Lula </strong>
								<span> São Bernardo do Campo </span>
							</div>
						</div>

						<div className="service-info">
							<strong> Hackear o Bolsonaro  </strong>
							<span>			
								4.8 <AiFillStar size={'2rem'} />
							</span>
						</div>
					</div>

					<div className="service-item">
						<div className="votingPerson">
							<img src={ProfileImg} alt="profilePic" className="profilePic" />
							<div>
								<strong> Mark Zuckerberg </strong>
								<span> Pindamonhangaba </span>
							</div>
						</div>

						<div className="service-info">
							<strong> Destravar Xbox  </strong>
							<span>			
								4.8 <AiFillStar size={'2rem'} />
							</span>
						</div>
					</div>
				</div>
			</ProfileStats>
		</Container>
	)
}

export default Profile
