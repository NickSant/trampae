import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/authContext"

import ibge from "../../services/ibge"
import api from "../../services/api"

import Input from "../Input"
import Select from "../Select"
import Textarea from "../Textarea"

import { Container, Modal } from "./styles"

import { FiX } from "react-icons/fi"
import { toast } from "react-toastify"

function EditServiceModal({ close, service }) {
	const [title, setTitle] = useState(service.title)
	const [description, setDescription] = useState(service.description)
	const [price, setPrice] = useState(service.price)
	const [selectedUf, setSelectedUf] = useState(service.uf)
	const [selectedCity, setSelectedCity] = useState(service.city)
	const [selectedCategory, setSelectedCategory] = useState(service.cat_id)

	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function getUfs() {
			const ufs = await ibge.getUfs()
			setUfs(ufs)
		}
		async function getCategories() {
			const apiResponse = await api.get("/categories")
			setCategories(apiResponse.data.categories)
		}
		getUfs()
		getCategories()
	}, [])

	useEffect(() => {
		async function getCities() {
			const cities = await ibge.getCities(selectedUf)
			setCities(cities)
		}
		getCities()
	}, [selectedUf])

	async function submitNewInfo(e) {
		e.preventDefault()
		api
			.put(`/service/update/${service.id}`, {
				title: title,
				description: description,
				price: price,
				id_category: selectedCategory,
				city: selectedCity,
				uf: selectedUf,
			})
			.then(res => {
				close()
				toast.success("informações alteradas com sucesso!")
			})
			.catch(e => toast.error(e.message))
	}

	return (
		<Container>
			<Modal>
				<FiX size={"2rem"} className="close" onClick={close} />

				<h3> Edite suas informações! </h3>

				<form>
					<Input name="Título" type="text" value={title} onChange={e => setTitle(e.target.value)} />

					<Input
						name="Pagamento"
						type="number"
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
					<Select
						onChange={e => setSelectedCategory(e.target.value)}
						name="Categoria"
						children={categories.map(cat => (
							<option key={cat.id} value={cat.id} title={cat.title}>
								{cat.title}
							</option>
						))}
					></Select>
					<div className="location">
						<Select
							className="select"
							onChange={e => setSelectedUf(e.target.value)}
							value={selectedUf}
							name="UF"
							children={ufs.map(uf => (
								<option key={uf.id} value={uf.name} title={uf.title}>
									{uf.value}
								</option>
							))}
						></Select>

						<Select
							className="select"
							onChange={e => setSelectedCity(e.target.value)}
							name="cidade"
							value={selectedCity}
							children={cities.map(city => (
								<option key={city.id} value={city.name} title={city.name}>
									{city.name}
								</option>
							))}
						></Select>
					</div>

					<Textarea
						name="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>

					<button onClick={submitNewInfo} type="submit" className="button">
						Cadastar
					</button>
				</form>
			</Modal>
		</Container>
	)
}

export default EditServiceModal
