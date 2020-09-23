import React, { useState, useEffect } from 'react'
import './styles.css'
import './stylesGrid1.css'
import './stylesGrid2.css'
import './stylesGrid3.css'
import { Link, useHistory } from 'react-router-dom'
import { FiHelpCircle, FiLogIn, FiUser, FiTrash } from 'react-icons/fi'
import ProfileImg from '../../assets/profile.png'

import { useAuth } from '../../contexts/authContext'

import Service from '../../components/Post'
import Navbar from '../../components/Navbar'
import Select from '../../components/Select'

import api from '../../services/api'
import ibge from '../../services/ibge'

import Util from '../../helpers/Util'

require('dotenv/config')

export default function Home() {
	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	const [selectedUf, setSelectedUf] = useState()
	const [selectedCity, setSelectedCity] = useState()

	const [services, setServices] = useState([])

	const { user } = useAuth()

	const history = useHistory()

	useEffect(() => (!Util.isAuthenticated('token') ? history.push('/') : ''), [])

	function clearFilters() {
    getServicesData();
    setSelectedUf("");
    setSelectedCity("");
	}

	async function concatData(service) {
		const userData = await getUserData(service.user_id)
		return { ...service, userData }
	}

	async function getUserData(userId) {
		const apiResponse = await api.get('/search/users', {
			params: {
				id: userId,
			},
		})
		return apiResponse.data[0]
	}

	async function getServicesData() {
		const apiResponse = await api.get('services')
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

		const response = await api.get('/search/services', {
			params: {
				uf: selectedUf,
				city: selectedCity,
				cat_id: 1,
			},
		})

		const data = response.data
		const concatedData = await Promise.all(
			data.map(service => {
				return concatData(service)
			})
		)
		setServices(concatedData)
		console.log(services)
	}

	return (
		<div className="Home-container">
			{/*Grid da esquerda*/}
			<Navbar />
			<aside className="Grid1">
				<div className="div-center">
					<li>
						<p className="button-pages">
							<img className="Profile" src={ProfileImg} alt="profile" />
							<p className="text-button"> Bem vindo, {user.name} </p>
						</p>
						<Link to="/aboutus">
							<p className="button-pages">
								<FiHelpCircle size={30} />
								<p className="text-button">Quem Somos</p>
							</p>
						</Link>
						<Link to="/register">
							<p className="button-pages">
								<FiUser size={30} />
								<p className="text-button">Cadastro</p>
							</p>
						</Link>
						<Link to="/">
							<p className="button-pages">
								<FiLogIn size={30} />
								<p className="text-button">Login</p>
							</p>
						</Link>
					</li>
				</div>
			</aside>

			{/*Grid do meio*/}
			<main className="Grid2">
				{services.length === 0 ? (
					<div className="cases">
						<h1> Não há serviços aqui </h1>
					</div>
				) : (
					<ul className="cases">
						{services.map(service => {
							return <Service key={service.id} user_name={service.userData.name} title={service.title} price={service.price} city={service.city} category={service.category} text={service.description} />
						})}
					</ul>
				)}
			</main>

			{/*Grid da direita*/}
			<aside className="serviços">
				<div className="right">
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<h1>Filtrar Bicos</h1>
						<button style={{ background: 'none', border: 'none' }} onClick={clearFilters}>
							<FiTrash />
						</button>
					</div>

					<form>
						<label>Estado:</label>
						<Select
							onChange={e => setSelectedUf(e.target.value)}
							name="UF"
							children={ufs.map(uf => {
								return (
									<option key={uf} value={uf}>
										{uf}
									</option>
								)
							})}
						/>

						<label>Cidade:</label>
						<Select
							onChange={e => setSelectedCity(e.target.value)}
							name="cidade"
							children={cities.map(city => {
								return (
									<option key={city.id} value={city.nome}>
										{city.nome}
									</option>
								)
							})}
						></Select>

						<button type="submit" className="Button" onClick={handleSubmit}>
							Filtrar
						</button>
					</form>
				</div>
			</aside>
		</div>
	)
}
