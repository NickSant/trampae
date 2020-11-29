import React from 'react'

import { Container } from './styles'
import userImg from '../../assets/user.png'

import { AiOutlineWhatsApp } from 'react-icons/ai'

function Post({ user, title, description, price, localization, category }) {
	
	return (
		<Container>
			<header>
				<div className="userInfo">
					<img src={userImg} alt="User" />
					<div>
						<strong> {user.name} </strong>
						<span>
							{localization.city} - {localization.uf}
						</span>
					</div>
				</div>
				<strong> {category} </strong>
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

				<a href={`https://api.whatsapp.com/send?phone=${user.whatsapp}&text=Olá%20${user.name}!`} target="_blank">
					<strong>Whatsapp</strong> <AiOutlineWhatsApp size={'1.5rem'} />
				</a>
			</footer>
		</Container>
	)
}

export default Post
