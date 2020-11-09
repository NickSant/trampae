import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

import trampaeIcon from '../../assets/icon.png'
import ProfileImg from '../../assets/profile.png'

export default function Navbar() {
	return (
		<Container>
			<a href="/home">
				<img src={trampaeIcon} alt="Logo"/>
			</a>
		</Container>
	)
}
