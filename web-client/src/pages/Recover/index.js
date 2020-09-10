import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams, Redirect } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

import logoImg from '../../assets/logo.png'
import api from '../../services/api'

import Input from '../../components/Input'
import auth from '../../helpers/Util'

require('dotenv/config')

export default function Recover() {
	const history = useHistory()

	const [confPass, setConfPass] = useState('')
	const [pass, setPass] = useState('')

	const { url_hash } = useParams()
	const his = useHistory()
	useEffect(async function () {
		const isAuthorized = await auth.isAuthenticated('mail', url_hash)
		if(!isAuthorized) {
			console.log(isAuthorized)
			return his.push('/')
		}
	}, [])

	function submit(e) {
		e.preventDefault()

		if (pass !== confPass) return alert('As senhas precisam ser iguais')
		if (confPass.length < 6) return alert('A senha deve ter no mínimo 6 caracteres!')

		const body = { newPass: confPass, urlHash:url_hash }
		const configs = {
			headers: {
				url_hash: url_hash,
			},
		}
		api
			.put('/forgot', body, configs)
			.then(res => {
				console.log('res', res)

				if (res.Error) return alert(res.Error)
				const user = res.data.currentUser

				console.log('user', user)

				alert(`${user.name}, Sua senha foi alterada com sucesso`) //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
				setTimeout(function () {
					goToLogin()
				}, 2000)
			})
			.catch(e => {
				alert(e)
				console.log(e)
			})
	}

	function goToLogin() {
		window.location = '/'
	}

	return (
		<div className="container">
			<div className="box">
				<div className="outra">
					<div className="login-header">
						<img src={logoImg} alt="Trampaê" />
					</div>
					<div className="form-container">
						<h1 className="title"> Cadastre sua nova senha! </h1>
						<form>
							<Input onChange={e => setPass(e.target.value)} type="password" name="Senha" />
							<Input onChange={e => setConfPass(e.target.value)} type="password" name="Confirme sua Senha" />

							<button className="button" onClick={submit} type="submit">
								Entrar
							</button>
						</form>
						<Link to="/forget" className="title">
							Esqueceu a Senha?
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
