import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams, Redirect } from 'react-router-dom'
import axios from 'axios'

import './styles.css'

import logoImg from '../../assets/logo.png'
import api from '../../services/api'

import Input from '../../components/Input'
import auth from '../../helpers/Util'
import { toast } from 'react-toastify'

require('dotenv/config')

export default function Recover() {
	const history = useHistory()

	const [confPass, setConfPass] = useState('')
	const [pass, setPass] = useState('')

	const { url_hash } = useParams()
	const his = useHistory()
	useEffect(async function () {
		const isAuthorized = await auth.verifyMailHash(url_hash)
		if(!isAuthorized) {
			console.log(isAuthorized)
			return his.push('/')
		}
	}, [])

	function submit(e) {
		e.preventDefault()

		if (pass !== confPass) return toast.error('As senhas precisam ser iguais')
		if (confPass.length < 6) return toast.error('A senha deve ter no mínimo 6 caracteres!')

		const body = { newPass: confPass, urlHash:url_hash }
		const configs = {
			headers: {
				url_hash: url_hash,
			},
		}
		api.put('/forgot', body, configs)
			.then(res => {
				console.log('res', res)

				if (res.data.Error) return toast.error(res.data.Error)
				const user = res.data.currentUser

				toast.success(`${user.name}, Sua senha foi alterada com sucesso`) //alert temporário - PELO AMOR DE DEUS, NÃO ESQUECER DE TIRAR!!!!!
				setTimeout(function () {
					goToLogin()
				}, 4000)
			})
			.catch(e => {
				toast.error('Não foi possível completar a ação. Tente novamente mais tarde!')
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
