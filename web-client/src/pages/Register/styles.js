import styled from 'styled-components'
import patternBG from '../../assets/texture-bg.png'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 10px;
	background: var(--white);

	@media (max-width: 599px) {
		flex-direction: column-reverse;
		height: 200vh;
	}
`

export const DisabledSection = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--secundary);
	background-image: url(${patternBG});
	background-repeat: no-repeat;
	background-size: cover;
	color: var(--white);

	padding: 0 2.5rem;

	h1 {
		margin-bottom: 3rem;

		padding: 5px;
		border-bottom: 5px solid var(--primary);
		font-size: 2rem;
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	@media (max-width: 599px) {
		width: 100%;
		height: 100%;
	}
`

export const ActiveSection = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--white);

	.indicator {
		position: relative;
		bottom: 2rem; 
		background: var(--primary);
		color: #fff;
		border-radius: 30px;

		height: 5rem;
		width: 3.8rem;

		display: none;
		align-items: center;
		justify-content: center;

		animation: ease 3s infinite bounce;
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

	@media (max-width: 599px) {
		width: 90%;
		align-items: center;
		justify-content: center;

		.indicator {
			display: flex;
		}
	}
`

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 5rem;
	padding: 1rem 2rem;

	h1 {
		padding: 5px;
		font-size: 2rem;
		font-size: 1.4rem;
		border-bottom: 2px solid var(--primary);
	}

	img {
		width: 6rem;
		height: 6rem;
	}
`

export const FormContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: var(--white);
	padding: 0 5% 2rem 5%;

	overflow: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 0.5em;
		height: 90%;
	}

	&::-webkit-scrollbar-track {
		display: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: var(--primary);
		outline: none;
	}

	::-webkit-scrollbar-corner {
		border-radius: 5px;
	}


	form {
		width: 100%;
		height: 100%;
	}

	.location {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: 1rem;

		.select:first-child {
			margin-right: 5px;
		}
	}

	.button {
		margin-top: 1rem;
	}

	@media (max-width: 599px) {
		align-items: center;
		justify-content: center;

		form {
			height: 70%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
`
