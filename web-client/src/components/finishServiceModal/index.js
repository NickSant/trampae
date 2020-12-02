import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import ibge from "../../services/ibge"

import Input from "../../components/Input"
import Select from "../../components/Select"

import { Container, Modal } from "./styles"

import ProfileImg from "../../assets/profile.png"

function CompleteServiceModal({ serviceId, onClose, children, chooseUser }) {
	const [username, changeName] = useState("")
	const [usersList, setUsersList] = useState([])
	const [selectedUf, setSelectedUf] = useState("")
	const [selectedCity, setSelectedCity] = useState("")
	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	useEffect(() => {
		async function getUfsOnIBGE() {
			const ufs = await ibge.getUfs()
			setUfs(ufs)
		}
		getUfsOnIBGE()
	}, [])

	useEffect(() => {
		async function getCitiesOnIBGE() {
			const cities = await ibge.getCities(selectedUf)
			setCities(cities)
		}
		getCitiesOnIBGE()
	}, [selectedUf])

	async function searchUsers(e) {
		e.preventDefault()
		const apiResponse = await api.get("/search/users", {
			params: {
				uf: selectedUf,
				city: selectedCity,
				name: username,
			},
		})

		if (apiResponse.data.messsage) {
			toast.warning(apiResponse.data.message)
			return
		}

		setUsersList(apiResponse.data.users)
	}

	return (
		<Container onClick={onClose}>
			<Modal>
				<div className="form-section">
					<h3>Quem fez esse serviço pra você?</h3>
					<span>Pesquise pelo usuário</span>
					<form>
						<Input type="text" name="Nome Completo" onChange={e => changeName(e.target.value)} />

						<div className="split-select">
							<Select
								onChange={e => setSelectedUf(e.target.value)}
								name="UF"
								children={ufs.map(uf => (
									<option key={uf.id} value={uf.value} title={uf.title}>
										{uf.value}
									</option>
								))}
							/>
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
						</div>
						<button className="button" onClick={searchUsers}>
							Procurar
						</button>
					</form>
				</div>

				<div className="results scrollable">
					{usersList
						? usersList.map(user => {
								return (
									<div key={user.id} className="user-item" onClick={() => chooseUser(user.id)}>
										<img src={ProfileImg} alt="profilePic" className="profilePic" />
										<div>
											<strong> {user.name} </strong>
											<span>
												{user.city} - {user.uf}
											</span>
										</div>
									</div>
								)
						  })
						: null}
				</div>
			</Modal>
		</Container>
	)
}

export default CompleteServiceModal
