import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, DropDown } from './styles'

import trampaeIcon from '../../assets/icon.png'
import ProfileImg from '../../assets/profile.png'
import profilePic from '../../assets/ZecaUrubu.png'

import { FiSearch, FiHome, FiUsers, FiSettings, FiPhoneCall, FiUserPlus, FiLogOut, FiTrash } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar() {

	const [active, setActive] = useState(false);

	return (
		<>
			<Container>
				<a href="/home">
					<img src={trampaeIcon} alt="Logo" />
				</a>

				<button onClick={() => setActive(!active)} className="hamburguer-buttom">
					<FiMenu />
				</button>
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
				<Link className="navItem">
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
