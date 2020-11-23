import React from 'react'

import { Container } from './styles'
import userImg from '../../assets/user.png'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import { useHistory } from 'react-router-dom'

import { AiOutlineWhatsApp } from 'react-icons/ai'

function Post({ user, title, description, price, id }) {
	const hist = useHistory()
	return (
		<Container>
			<header>
				<div className="userInfo">
					<img src={userImg} alt="User" />
					<div>
						<strong> {user.name} </strong>
						<span>
							{user.city} - {user.uf}
						</span>
					</div>
				</div>
				<strong> Trabalho Doméstico </strong>
			</header>

			<div className="content">
				<strong> {title} </strong>
				<p> {description} </p>
			</div>

			<footer>
				<div>
					<span>R$ {price}</span>
				</div>

				<button>
					<strong> Ver detalhes </strong>
				</button>

				<button>
					<strong>Whatsapp</strong> <AiOutlineWhatsApp size={'1.5rem'} />
				</button>
			</footer>
		</Container>
	)
}

export default Post
