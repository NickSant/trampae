import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

import { Container, DisabledSection, ActiveSection, FormGroup } from "./styles"

import Input from "../../components/Input"
import Textarea from "../../components/Textarea"
import Select from "../../components/Select"

import { FiArrowLeft } from "react-icons/fi"

import ibge from "../../services/ibge"
import api from "../../services/api"

import logoImg from "../../assets/logo.png"

export default function NewService() {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [price, setPrice] = useState('')
	const [selectedUf, setSelectedUf] = useState('')
	const [selectedCity, setSelectedCity] = useState('')

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
			.post("/services", body, {})
			.then(() => {
				toast.success("Serviço cadastrado com sucesso")
				alert("boa zé")
				window.location = "/home"
			})
			.catch(err => {
				toast.error(err)
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
						<FiArrowLeft size={"1.8rem"} /> Ou volte para o início{" "}
					</span>
				</Link>
			</DisabledSection>

			<ActiveSection>
				<img src={logoImg} alt="logo" className="Logo" />

				<div className="mobile">
					<h1 className="title"> Publique seu bico </h1>
					<p> Ache a pessoa certa pra te ajudar no que for preciso! </p>
				</div>

				<FormGroup>
					<Input name="Título" type="text" onChange={e => setTitle(e.target.value)} />
					<Select name="Categoria" />
					<Input name="Pagamento" type="text" onChange={e => setPrice(e.target.value)} />
					<div className="location">
						<Select
							className="select"
							onChange={e => setSelectedUf(e.target.value)}
							name="UF"
							children={ufs.map(uf => (
								<option key={uf.id} value={uf.value} title={uf.title}>
									{uf.value}
								</option>
							))}
						></Select>

						<Select
							className="select"
							onChange={e => setSelectedCity(e.target.value)}
							name="cidade"
							children={cities.map(city => (
								<option key={city.id} value={city.name} title={city.name}>
									{city.name}
								</option>
							))}
						></Select>
					</div>

					<Textarea name="Descrição" onChange={e => setDescription(e.target.value)}/>

					<br />

					<button onClick={handleSubmit} className="button">Publicar</button>
				</FormGroup>

				<Link to="/home" className="mobile">
					<span>
						<FiArrowLeft size={"1.8rem"} /> Ou volte para o início{" "}
					</span>
				</Link>
			</ActiveSection>
		</Container>
	)
}
