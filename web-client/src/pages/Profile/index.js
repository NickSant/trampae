import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

import logoImg from '../../assets/logo.png'
import api from '../../services/api'

import Input from '../../components/Input'
import Error from '../../components/Error'

import { Box, ActiveSection, Header, FormContainer, Title, DisabledSection } from './styles'

require('dotenv/config')

const Profile =() => {
	const history = useHistory()

	const { user } = useAuth()

	const userFields = Array('name', 'email', 'city', 'uf', 'total_trampos', 'whatsapp')
	function goToHome() {
		history.push('/home')
	}
	useEffect(function(){
		console.log(user)
	})

	return (
		<Box>
			<ActiveSection>
				<Header>
					<img src={logoImg} alt="trampae_icon" title="Trampaê"/>
					<a href="/home">Voltar</a>	
				</Header>

				<FormContainer>
					<Title> Perfil {user.name}! </Title>
				</FormContainer>
			</ActiveSection>
			<DisabledSection>
				<h2>Dados</h2>
				{userFields.map(field =>(
					<div>
						<strong>{field}:</strong> {user[field]}
					</div>) 
				)}

			</DisabledSection>

		</Box>
	)
}
export default Profile;