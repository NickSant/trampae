import React, { useState, useEffect } from "react"
import { useAuth } from "../../contexts/authContext"

import ibge from "../../services/ibge"
import api from "../../services/api"

import Input from "../../components/Input"
import Select from "../../components/Select"
import Textarea from "../../components/Textarea"

import { Container, Modal } from "./styles"

import { FiX } from "react-icons/fi"
import { toast } from "react-toastify"

function EditProfileModal({ close }) {
	const { user, refreshUser } = useAuth()

	const [name, changeName] = useState(user.name)
	const [email, changeMail] = useState(user.email)
	const [imageUrl, changeImageUrl] = useState(user.image_url)
	const [whats, changeWhats] = useState(user.whatsapp)
	const [bio, changeBio] = useState(user.bio)
	const [selectedUf, setSelectedUf] = useState(user.uf)
	const [selectedCity, setSelectedcity] = useState(user.city)

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

	async function submitNewInfo(e) {
        e.preventDefault()
		api
			.put("/user/update", {
				name: name,
				email: email,
				whatsapp: whats,
				image_url: imageUrl,
				city: selectedCity,
				bio: bio,
				uf: selectedUf,
			})
			.then(res => {
				close()
				refreshUser()
				toast.success("informações alteradas com sucesso!")
			})
			.catch(e => toast.error(e))
	}

	return (
		<Container>
			<Modal>
				<FiX size={"2rem"} className="close" onClick={close} />

				<h3> Edite suas informações! </h3>

				<form>
					<Input
						type="text"
						name="Nome Completo"
						value={name}
						onChange={e => changeName(e.target.value)}
					/>
					<Input
						type="Email"
						name="E-mail"
						value={email}
						onChange={e => changeMail(e.target.value)}
					/>

					<Input
						type="text"
						name="Link da imagem"
						value={imageUrl}
						onChange={e => changeImageUrl(e.target.value)}
					/>
					<Input
						type="tel"
						name="Whatsapp"
						value={whats}
						onChange={e => changeWhats(e.target.value)}
					/>
					<Textarea type="text" name="Bio" value={bio} onChange={e => changeBio(e.target.value)} />

					<div className="location">
						<Select
							className="select"
							value={selectedUf}
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
							onChange={e => setSelectedcity(e.target.value)}
							name="cidade"
							value={selectedCity}
							children={cities.map(city => (
								<option key={city.id} value={city.name} title={city.name}>
									{city.name}
								</option>
							))}
						></Select>
					</div>

					<button onClick={submitNewInfo}type="submit" className="button">
						Cadastar
					</button>
				</form>
			</Modal>
		</Container>
	)
}

export default EditProfileModal
