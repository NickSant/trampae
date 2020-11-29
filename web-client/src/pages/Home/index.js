import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
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
	const [areFilteredServices, setAreFilteredServices] = useState(false)
	const [servicePage, setServicePage] = useState(2)
	const [services, setServices] = useState([])

	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	const [selectedUf, setSelectedUf] = useState()
	const [selectedCity, setSelectedCity] = useState()

	function clearFilters() {
		getServicesData()
		setServicePage(2)
		setSelectedUf("")
		setSelectedCity("")
	}

	async function getUfs() {
		const ufs = await ibge.getUfs()

		setUfs(ufs)
	}

	async function getCities() {
		const cities = await ibge.getCities(selectedUf)

		setCities(cities)
	}

	async function getServicesData() {
		const apiResponse = await api.get("search/services")
		setServices(apiResponse.data.services)
	}

	useEffect(() => {
		getServicesData()

		getUfs()
	}, [])

	useEffect(() => {
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
		setServices(data.services)
		setAreFilteredServices(true)
	}

	async function getMorePages() {
		setServicePage(servicePage + 1)
		console.log("paginaaa", servicePage);
		if (areFilteredServices) {

			const response = await api.get("/search/services", {
				params: {
					uf: selectedUf,
					city: selectedCity,
					page: servicePage,
				},
			})

			if (response.data.services.length >= 1) {
				setServices([...services, ...response.data.services])
			} else {
				toast.warning("Não tem mais nada por aqui!")
			}
		} else {
			const response = await api.get("/search/services", {
				params: {
					page: servicePage,
				},
			})

			console.log("tamanho", response.data.services)
			if (response.data.services.length < 1) {
				toast.warning("Não tem mais nada por aqui!")
			} else {
				setServices([...services, ...response.data.services])
			}
		}
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
					<Link to={`/profile/${user.id}`} className="navItem">
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
					<Link to="/talkwithus" className="navItem">
						<FiSettings size={"1.8rem"} />
						Configurações
					</Link>

					<Link className="navItem" to="/logout">
						<FiLogOut size={"1.8rem"} />
						Sair
					</Link>
				</SideBar>

				<MainContent filterActive={isFilterActive}>
					{services.length >= 1 ? (
						services.map(service => {
							return (
								<Post
									key={service.id}
									id={service.id}
									user={{
										name: service.user_name,
										id: service.user_id,
										image: service.user_image,
										whatsapp: service.user_whatsapp,
									}}
									title={service.title}
									price={service.price}
									category={service.category_title}
									description={service.description}
									localization={{ uf: service.uf, city: service.city }}
								/>
							)
						})
					) : (

						<p>Não há nada por aqui! =(</p>
					)}

					{services.length >= 12 ? (
						<button onClick={getMorePages} className="button secondary">
							{" "}
							Ver mais serviços{" "}
						</button>
					) : null}
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
