import React, { useState, useEffect } from 'react'

import { Container, DisabledSection, ActiveSection, FormGroup } from './styles'

import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import { FiArrowLeft } from 'react-icons/fi'

import ibge from '../../services/ibge'
import api from '../../services/api'

import logoImg from '../../assets/logo.png'

export default function NewService() {
	const [title, setTitle] = useState()
	const [description, setDescription] = useState()
	const [price, setPrice] = useState()
	const [selectedUf, setSelectedUf] = useState()
	const [selectedCity, setSelectedCity] = useState()

	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	useEffect(() => {
		async function getUfs() {
			const ufs = await ibge.getUfs()
			setUfs(ufs)
		}
		getUfs()
	})
	useEffect(() => {
		async function getCities() {
			const cities = await ibge.getCities(selectedUf)
			setCities(cities)
		}
		getCities()
	}, [selectedUf])

	async function handleSubmit(e) {
		e.preventDefault()

		const body = {
			title: title,
			description: description,
			price: price,
			number_participants: 1, //hardcoded
			id_category: 1, //hardcoded
			uf: selectedUf,
			city: selectedCity,
		}

		api
			.post('services', body, {})
			.then(() => {
				alert('Serviço cadastrado com sucesso')

				window.location = '/home'
			})
			.catch(err => {
				alert(err)
			})
	}

	//---Começo do Front-end---//
	return (
		<Container>
			<DisabledSection>
				<h1 className="title"> Publique seu bico </h1>

				<p> Ache a pessoa certa pra te ajudar no que for preciso! </p>

				<Link to="/home">
					<span>
						<FiArrowLeft size={'1.8rem'} /> Ou volte para o início{' '}
					</span>
				</Link>
			</DisabledSection>

			<ActiveSection>
				<img src={logoImg} alt="logo" className="Logo" />

				<FormGroup>
					<Input name="Título" />
					<Select name="Categoria" />
					<Textarea name="Descrição" />

					<br />

					<button className="button">Publicar</button>
				</FormGroup>
			</ActiveSection>
		</Container>
	)
}
