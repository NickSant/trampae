import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import trampaeIcon from '../../assets/icon.png'
import ProfileImg from '../../assets/profile.png'

export default function Navbar() {
	return (
		<Container>
			<Link to="/home">
				<img src={trampaeIcon} alt="Logo" />
			</Link>

			<Link to="/new-service">
				<button className="button">Novo bico</button>
			</Link>
		</Container>
	)
}
