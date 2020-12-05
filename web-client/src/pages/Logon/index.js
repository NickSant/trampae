import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'

import validate from '../../helpers/validators'

import { toast } from 'react-toastify';
import { FiArrowDown } from 'react-icons/fi';


import {
	Container,
	ActiveSection,
	Header,
	FormContainer,
	Title,
	ForgotPassword,
	DisabledSection,
} from './styles'



import 'dotenv/config'
import Util from '../../helpers/Util'


export default function Logon() {
	const history = useHistory()
	
	const [mail, setMail] = useState('')
	const [pass, setPass] = useState('')

	useEffect(() => localStorage.clear(), [])

	const { signIn } = useAuth()

	async function submit(e) {
		e.preventDefault()
		
		validate.login(mail, pass).then( async res => {
			if(!res || res.errors || res.message) return false
			
			const userExists = await signIn({ mail, pass })
			if(userExists) goToHome()
			else toast.error('Email e (ou) senha incorreto(s)')

		})
		.catch((e) => console.log(e))

	}
	function goToHome() {
		const user = Util.getUser()
		toast.success(`Isso aí ${user.name}, espera só um pouquinho..`)
		setInterval(() => history.push('/home') , 3000)
	}

	return (
		<Container>
			<ActiveSection>
				<Header>
					<img src={logoImg} alt="Trampaê"></img>
				</Header>

				<FormContainer>
					<Title> Faça seu login! </Title>

					<form>
						<Input onChange={e => setMail(e.target.value)} type="email" name="E-mail" />
						<Input onChange={e => setPass(e.target.value)} type="password" name="Senha" />

						<button onClick={submit} type="submit" className="button">Entrar</button>
					</form>

					<Link to="/forget">
						<ForgotPassword>
							Esqueceu a Senha?
						</ForgotPassword>
					</Link>
				</FormContainer>	

				<div className="indicator">
					<FiArrowDown size={'3rem'} />
				</div>
			</ActiveSection>


			<DisabledSection>
				<div>
					<Title> Ainda não tem Login? </Title>
					<h2> Tá esperando o que?</h2>
					<Link className="button secondary" to="/register">
						Registre-se já!
					</Link>
				</div>
			</DisabledSection>
		</Container>
	)
}
