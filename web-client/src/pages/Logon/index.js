import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import api from '../../services/api'
import logoImg from '../../assets/logo.png'
import Input from '../../components/Input'

import validate from '../../helpers/validators'

import {toast, ToastContainer} from 'react-toastify'

import {
	Container,
	ActiveSection,
	Header,
	FormContainer,
	Title,
	ForgotPassword,
	DisabledSection,
} from './styles'


//---Começo API---//
import 'dotenv/config'

export default function Logon() {
	const history = useHistory()

	const [mail, setMail] = useState('')
	const [pass, setPass] = useState('')

	const [user, setUser] = useState({})

	useEffect(() => localStorage.clear(), [])

	const { signIn } = useAuth()

	async function submit(e) {
		e.preventDefault()
		
		// if(!mail.includes('@') || !mail.includes('.')) return toast.error('Credenciais')
		// else if(mail === undefined || mail === '' || pass === undefined || pass === '') return toast.error('Credenciais inválidas');
		const a = await validate.login(mail, pass)
		
		const isValidated = await signIn({ mail, pass })

		console.log(isValidated)
		// isValidated ? goToHome() : toast('Credenciais inválidas')
		
	}
	function goToHome() {
		history.push('/home')
	}

	//---Começo do Front-end---//
	return (
		<Container>
			<ActiveSection>
				<Header>
					<img src={logoImg} width={125} alt="Trampaê"></img>
				</Header>

				<FormContainer>
					<Title> Faça seu login! </Title>

					<form>
						<Input onChange={e => setMail(e.target.value)} type="email" name="E-mail" />
						<Input onChange={e => setPass(e.target.value)} type="password" name="Senha" />

						<button onClick={submit} type="submit">Entrar</button>
					</form>

					<Link to="/forget">
						<ForgotPassword>
							Esqueceu a Senha?
						</ForgotPassword>
					</Link>
				</FormContainer>
			</ActiveSection>


			<DisabledSection>
				<Title> Ainda não tem Login? </Title>
					<h1> Tá esperando o que?</h1>
				<Link className="button" to="/register">
					Registre-se já!
				</Link>
			</DisabledSection>
		</Container>
	)
}
//---Fianl Front-end---//