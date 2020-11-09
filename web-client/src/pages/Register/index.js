import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'
import ibge from '../../services/ibge'

import { 
	Container, 
	ActiveSection, 
	Header, 
	FormContainer,  
	DisabledSection 
	} from './styles'

//---Começo da API---//
require('dotenv/config')

export default function Register() {
	const [name, changeName] = useState('')
	const [email, changeMail] = useState('')
	const [whats, changeWhats] = useState('')
	const [password, changePass] = useState('')

	const [selectedUf, setSelectedUf] = useState('')
	const [selectedCity, setSelectedcity] = useState('')

	const [ufs, setUfs] = useState([])
	const [cities, setCities] = useState([])

	// ibge functions ----------------------------------------------------
	//get ufs

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

	//  SUBMIT- -----------------------------

	async function submitRegister(e) {
		e.preventDefault()
		if(password.length < 6) return alert('A senha deve conter no mínimo 6 dígitos!')

		api.post('/signup', {
			name: name,
			email: email,
			whatsapp: whats,
			password: password,
			city: selectedCity,
			uf: selectedUf,
		})
		.then(res => {
			console.log(res, 'res')
			localStorage.removeItem('@Trampae:token')
			//confirmação
			localStorage.setItem('@Trampae:token', `Bearer ${res.data.token}`)

			setTimeout(() => {
				goToLogin()
			}, 2000)
		})
		.catch(e => {
			localStorage.removeItem('@Trampae:token')

			console.log(e)
			alert(e)
		})
	}
	function goToLogin() {
		window.location = '/'
	}

	return (
		<Container>
			<DisabledSection>
				<h1>Já tem registro?</h1>
				<h3>Vem logo, faça login e encontre novos bicos!</h3>
				<Link className="button" to="/">Login</Link>
			</DisabledSection>

			<ActiveSection>
				<Header>
					<img src={logoImg} width={125} alt="Trampaê"></img>
					<h1 className="title"> Registre-se já!</h1>
				</Header>

				<FormContainer>
					<form>
						<Input type="text" name="Nome Completo" onChange={e => changeName(e.target.value)} />
						<Input type="Email" name="E-mail" onChange={e => changeMail(e.target.value)} />
						<Input type="password" name="Senha" onChange={e => changePass(e.target.value)} />

						<Input type="tel" name="Whatsapp" onChange={e => changeWhats(e.target.value)} />
					
						<div className="location">
							<Select
								className="select"
								onChange={e => setSelectedUf(e.target.value)}
								name="UF"
								children={ ufs.map(( uf  ) =>(
									<option 
										key={uf.id} 
										value={uf.value} 
										title={uf.title}
									>
										{uf.value}
									</option>
								))}>
							</Select>
		
							<Select
								className="select"
								onChange={e => setSelectedcity(e.target.value)}
								name="cidade"
								children={ cities.map((city) => (
									<option 
										key={city.id}
										value={city.name}
										title={city.name}
									>
										{city.name}
									</option>
								)) }>
							</Select>
						</div>

						<button type="submit" className="button" onClick={submitRegister}>
							Cadastar
						</button>
					</form>
				</FormContainer>
			</ActiveSection>
		</Container>
	)
}
