import { FiPhone, FiMail } from 'react-icons/fi'

import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	.landing {
		width: 100vw;
		height: calc(100vh - 4rem);
		margin-top: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 25rem;
			height: 25rem;
		}

		strong {
			font-size: 3.3rem;
			color: var(--primary);
			text-align: center;
			line-height: 5rem;
			width: 100%;
		}

		.indicator {
			position: relative;
			top: 11rem;
			right: 3rem;

			background: var(--primary);
			color: #fff;
			border-radius: 30px;

			height: 2.5rem;
			width: 2.8rem;

			display: flex;
			align-items: center;
			justify-content: center;

			animation: ease 3s infinite bounce;
		}
	}

	.devsInfos {
		width: 100vw;
		margin-top: 5rem;

		.devs {
			display: flex;
			flex-direction: row;
			align-items: center;
            justify-content: center;
            
		}
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-25px);
		}
		60% {
			transform: translateY(-15px);
		}
	}
`

export const DevCard = styled.div`
	width: 14rem;
	height: 20rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	border: 1px solid var(--light-gray);
`
