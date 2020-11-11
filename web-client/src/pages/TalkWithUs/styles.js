import { FiPhone, FiMail } from 'react-icons/fi'

import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100vw;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-x: hidden;

	.landing {
		width: 100%;
		height: calc(100vh - 4rem);
		margin-top: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 24rem;
			height: 24rem;
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
		width: 100%;
		margin-top: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		

		h1 {
			font-size: 3rem;
			color: var(--primary);
		}

		.devs {
			width: 100%;
			padding: 1rem auto;
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
`;
