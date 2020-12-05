import styled from 'styled-components'
import patternBG from '../../assets/texture-bg.png'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: var(--white);

	@media (max-width: 599px) {
		display: flex;
		flex-direction: column;
		height: 200vh;
	}
`

export const ActiveSection = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;

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

	@media (max-width: 599px) {
		width: 90%;
		align-items: center;
		

		h1 {
			margin-top: -10rem;
		}

		.indicator{
			display: flex;
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

export const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 15vh;
	padding: 20px;

	img {
		width: 8rem;
		height: 8rem;
	}

	@media (max-width: 599px) {
		justify-content: center;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	> form {
		margin-top: 1rem;
		padding: 1rem;
		width: 70%;

		> button {
			margin-top: 1.2rem;
		}
	}

	@media (max-width: 599px) {
		form {
			width: 100%;
		}
	}
`

export const Title = styled.h1`
	font-size: 2rem;
	padding: 5px;
	border-bottom: 5px solid var(--primary);
`

export const ForgotPassword = styled.p`
	text-decoration: none;
	font-size: 0.8rem;
	display: flex;
	margin-top: 0.6rem;
	color: #14b3b0;
`

export const DisabledSection = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--secundary);
	background-image: url(${patternBG});
	background-size: cover;
	color: var(--white);

	div {
		width: 75%;
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		h2 {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 599px) {
		width: 100%;

		div {
			height: 40%;
			width: 90%;
		}
	}
`
