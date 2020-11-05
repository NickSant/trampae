import React from 'react'

import { Container } from './styles'
import userImg from '../../assets/user.png'
import WhatsAppIcon from '../../assets/whatsapp.svg'
import { useHistory } from 'react-router-dom'

import { AiOutlineWhatsApp } from 'react-icons/ai'

function Post({ user, serviceTitle, serviceDescription, servicePrice }) {
	const hist = useHistory()
	return (
		<Container>
			<header>
				<div className="userInfo">
					<img src={userImg} alt="User" />
					<div>
						<strong> Aldair Fagundes </strong>
						<span> São Bernardo do Campo </span>
					</div>
				</div>
        <strong> Trabalho Doméstico </strong>
			</header>

			<div className="content">
				<strong> Ajuda com trabalhos </strong>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</div>

			<footer>
				<div>
					<strong>Pagamento: </strong>
					<span>R$ 300</span>
				</div>
				
				<button>
					<strong> Ver detalhes </strong>
				</button>

				<button>
					<strong>Whatsapp</strong> <AiOutlineWhatsApp size={"1.5rem"}/>
				</button>
			</footer>
		</Container>
	)
}

export default Post
