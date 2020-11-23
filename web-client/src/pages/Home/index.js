import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { useAuth } from "../../contexts/authContext"
import api from "../../services/api"
import ibge from "../../services/ibge"

import Post from "../../components/Post"
import Select from "../../components/Select"
import Navbar from "../../components/Navbar"

import { Container, SideBar, MainContent, FilterContainer } from "./styles.js"

import {
	FiUsers,
	FiSettings,
	FiPhoneCall,
	FiLogOut,
	FiTrash,
	FiFilter,
	FiPlusCircle,
} from "react-icons/fi"
import profilePic from "../../assets/ZecaUrubu.png"

//--Começo do Front-end---//
export default function Home() {
	const { user } = useAuth()
	const [isFilterActive, setFilterActive] = useState(false)
	const [services, setServices] = useState([])

	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	const [selectedUf, setSelectedUf] = useState()
	const [selectedCity, setSelectedCity] = useState()

	function clearFilters() {
		getServicesData()
		setSelectedUf("")
		setSelectedCity("")
	}

	async function concatData(service) {
		const userData = await getUserData(service.user_id)
		return { ...service, userData }
	}

	async function getUserData(userId) {
		const apiResponse = await api.get("/search/users", {
			params: {
				id: userId,
			},
		})
		return apiResponse.data.users[0]
	}

	async function getServicesData() {
		const apiResponse = await api.get("services")
		const data = apiResponse.data

		const concatedData = await Promise.all(
			data.map(service => {
				return concatData(service)
			})
		)
		setServices(concatedData)
	}

	useEffect(() => {
		getServicesData()

		async function getUfs() {
			const ufs = await ibge.getUfs()

			setUfs(ufs)
		}
		getUfs()
	}, [])

	useEffect(() => {
		async function getCities() {
			const cities = await ibge.getCities(selectedUf)

			setCities(cities)
		}
		getCities()
	}, [selectedUf])

	async function handleSubmit(e) {
		e.preventDefault()

		const response = await api.get("/search/services", {
			params: {
				uf: selectedUf,
				city: selectedCity,
			},
		})

		const data = response.data
		const concatedData = await Promise.all(
			data.services.map(service => {
				return concatData(service)
			})
		)
		setServices(concatedData)
		console.log(services)
	}

	return (
		<>
			<Container>
				<Navbar>
					<Link to="/new-service">
						<button>
							<FiPlusCircle />
						</button>
					</Link>
					<button onClick={() => setFilterActive(!isFilterActive)}>
						<FiFilter />
					</button>
				</Navbar>
				<SideBar>
					<Link to="/profile" className="navItem">
						<img src={profilePic} alt="user" className="profilePic" />
						{user.name}
					</Link>
					<Link to="/talkwithus" className="navItem">
						<FiPhoneCall size={"1.8rem"} />
						Fale conosco
					</Link>
					<Link to="/aboutus" className="navItem">
						<FiUsers size={"1.8rem"} />
						Sobre nós
					</Link>
					<Link className="navItem">
						<FiSettings size={"1.8rem"} />
						Configurações
					</Link>

					<Link className="navItem" to="/logout">
						<FiLogOut size={"1.8rem"} />
						Sair
					</Link>
				</SideBar>

				<MainContent filterActive={isFilterActive}>
					{services.map(service => {
						return (
							<Post
								key={service.id}
								id={service.id}
								user={service.userData}
								title={service.title}
								price={service.price}
								description={service.description}
							/>
						)
					})}
				</MainContent>
			</Container>

			<FilterContainer filterActive={isFilterActive}>
				<header>
					<strong>Filtrar bicos</strong>

					<FiTrash onClick={clearFilters} size={"1.2rem"} />
				</header>

				<label>Estado: </label>
				<Select
					onChange={e => setSelectedUf(e.target.value)}
					name="UF"
					children={ufs.map(uf => (
						<option key={uf.id} value={uf.value} title={uf.title}>
							{uf.value}
						</option>
					))}
				/>

				<label>Cidade: </label>
				<Select
					className="select"
					onChange={e => setSelectedCity(e.target.value)}
					name="cidade"
					children={cities.map(city => (
						<option key={city.id} value={city.name} title={city.name}>
							{city.name}
						</option>
					))}
				/>

				<button onClick={handleSubmit} className="button">
					Filtrar
				</button>
			</FilterContainer>
		</>
	)
}
