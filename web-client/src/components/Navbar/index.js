import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, DropDown } from './styles'

import trampaeIcon from '../../assets/icon.png'
import ProfileImg from '../../assets/profile.png'
import profilePic from '../../assets/ZecaUrubu.png'

import { FiUsers, FiSettings, FiPhoneCall, FiLogOut } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar({ children }) {
	const [active, setActive] = useState(false)

	return (
		<>
			<Container>
				<a href="/home">
					<img src={trampaeIcon} alt="Logo" />
				</a>

				<div>
					{children}
					<button onClick={() => setActive(!active)} className="hamburguer-buttom">
						<FiMenu />
					</button>
				</div>

				
				<Link to="/new-service" className="button secondary">Novo Serviço</Link>
			</Container>
			<DropDown active={active}>
				<Link to="/profile" className="navItem">
					Flavinho do Pneu
					<img src={profilePic} alt="user" className="profilePic" />
				</Link>
				<Link to="/talkwithus" className="navItem">
					Fale conosco
					<FiPhoneCall size={'1.8rem'} />
				</Link>
				<Link to="/aboutus" className="navItem">
					Sobre nós
					<FiUsers size={'1.8rem'} />
				</Link>
				<Link to="/home" className="navItem">
					Configurações
					<FiSettings size={'1.8rem'} />
				</Link>

				<Link className="navItem" to="/logout">
					Sair
					<FiLogOut size={'1.8rem'} />
				</Link>
			</DropDown>
		</>
	)
}
