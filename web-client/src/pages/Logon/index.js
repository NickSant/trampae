import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import logoImg from '../../assets/logo.png'
import api from '../../services/api'

import Input from '../../components/Input'
import Error from '../../components/Error'

import { Box, ActiveSection, Header, FormContainer, Title, DisabledSection } from './styles'

require('dotenv/config')

export default function Logon() {
	const history = useHistory()

	const [mail, setMail] = useState('')
	const [pass, setPass] = useState('')

	const [user, setUser] = useState({})

	const { signIn } = useAuth()

	async function submit(e) {
    e.preventDefault();

    const isValidated = await signIn({ mail, pass });

    isValidated ? goToHome() : alert("O login falhou, tente novamente");
	}

	function goToHome() {
		history.push('/home')
	}

	return (
		<Box>
			<ActiveSection>
				<Header>
					<img src={logoImg} width={125} alt="Trampaê"></img>
				</Header>

				<FormContainer>
					<Title> Faça seu login! </Title>

					<form>
						<Input onChange={e => setMail(e.target.value)} type="email" name="E-mail" />
						<Input onChange={e => setPass(e.target.value)} type="password" name="Senha" />

						<button className="back-link" onClick={submit} className="button" type="submit">
							Entrar
						</button>
					</form>
					<Link to="/forget" className="title">
						Esqueceu a Senha?
					</Link>
				</FormContainer>
			</ActiveSection>

			<DisabledSection>
				<h1 className="title"> Ainda não tem Login? </h1>
				<h3 className="title"> Tá esperando o que?</h3>
				<Link className="button" to="/register">
					Registre-se já!
				</Link>
			</DisabledSection>
		</Box>
	)
}
