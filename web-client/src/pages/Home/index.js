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
				<div className="navItem">
					<FiUsers size={"1.8rem"}/>
					Fale conosco
				</div>
				<div className="navItem">
					<FiPhoneCall size={"1.8rem"}/>
					Sobre nós
				</div>
				<div className="navItem">
					<FiSettings size={"1.8rem"}/>
					Configurações
				</div>
				<div className="navItem">
					<FiLogOut size={"1.8rem"}/>
					Sair
				</div>
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
