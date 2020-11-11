import React from 'react'
import { Link } from 'react-router-dom';

import Post from '../../components/Post'
import Select from '../../components/Select'
import Navbar from '../../components/Navbar'

import { Container, SideBar, MainContent, FilterContainer } from './styles.js'

import { FiSearch, FiHome, FiUsers, FiSettings, FiPhoneCall, FiUserPlus, FiLogOut, FiTrash } from 'react-icons/fi'
import profilePic from '../../assets/ZecaUrubu.png'

//--Começo do Front-end---//
export default function Home() {
	return (
		<Container>
			<Navbar />
			<SideBar>
				<Link to="/profile" className="navItem">
					<img src={profilePic} alt="user" className="profilePic" />
					Flavinho do Pneu
				</Link>
				<Link to="/talkwithus"className="navItem">
					<FiPhoneCall size={"1.8rem"}/>
					Fale conosco
				</Link>
				<Link to="/aboutus" className="navItem">
					<FiUsers size={"1.8rem"}/>
					Sobre nós
				</Link>
				<Link className="navItem">
					<FiSettings size={"1.8rem"}/>
					Configurações
				</Link>
	

				<Link className="navItem" to="/logout">
					<FiLogOut size={"1.8rem"}/>
					Sair
				</Link>
				

			</SideBar>

			<MainContent>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</MainContent>

			<FilterContainer>
				<header>
					<strong>Filtrar bicos</strong>
					<FiTrash />
				</header>

				<label>Estado: </label>
				<Select />

				<label>Cidade: </label>
				<Select />

				<button className="button">Filtrar</button>
			</FilterContainer>
		</Container>
	)
}
