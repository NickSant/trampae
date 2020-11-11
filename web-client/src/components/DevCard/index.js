import React from 'react'

import { Container } from './styles'

import { RiInstagramFill, RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

function DevCard({ name, location, photoUrl, linkInstagram, linkLinkedin, linkGithub }) {
	return (
		<Container>
			<img src={photoUrl} alt="dev" />

			<div className="infos">
				<div className="arrow">
					<FiArrowUp />
				</div>
				<div className="bottom">
					<strong>{name}</strong>
					<span>{location}</span>
				</div>
				<div className="links">
					<a href={linkInstagram} target="_blank">
						<RiInstagramFill size={'1.8rem'} />
					</a>
					<a href={linkLinkedin} target="_blank">
						<RiLinkedinBoxFill size={'1.8rem'} />
					</a>
					<a href={linkGithub} target="_blank">
						<RiGithubFill size={'1.8rem'} /> 
					</a>
				</div>
			</div>
		</Container>
	)
}

export default DevCard
