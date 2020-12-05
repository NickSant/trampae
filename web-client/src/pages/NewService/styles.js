import styled from 'styled-components'
import patternBG from '../../assets/texture-bg.png'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.title {
		padding: 5px 0;
		border-bottom: 0.2rem solid var(--primary);
	}

	@media (max-width: 599px) {
		flex-direction: column-reverse;
		position: fixed;
	}
`

export const DisabledSection = styled.div`
	width: 40%;
	height: 100%;

	background-image: url(${patternBG});
	background-size: cover;
	background-color: var(--secundary);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: var(--white);

	.title {
		font-size: 2.2rem;
	}

	p {
		padding: 1rem 0;
		font-size: 1rem;
		line-height: 1.3rem;
	}

	span {
		padding: 2rem 0;
		font-size: 0.8rem;
		color: var(--primary);
		fill: var(--primary);
		display: flex;
		align-items: center;
		transition: ease 0.3s;

		&:hover {
			filter: brightness(90%);
		}
	}

	@media (max-width: 599px) {
		display: none;
	}
`

export const ActiveSection = styled.div`
	width: 60%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	padding: 10px 20px;

	.Logo {
		width: 8rem;
		position: absolute;
		top: 0.5rem;
		right: 1rem;
		margin-top: -1.5rem;
	}

	.mobile{
		display: none;
	}

	@media(max-width: 599px){
		width: 90%;
		justify-content: center;

		.mobile{
			display: flex;
			flex-direction: column;
			text-align: center;
			margin-bottom: 4rem; 

			p{
				padding: 1rem 0;
			}

			span{
				color: var(--primary);
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
`

export const FormGroup = styled.form`
	height: 80%;
	width: 100%;
	padding: 0 1rem;

	input,
	select,
	textarea {
		margin-bottom: 5px;
	}

	overflow: scroll;
	overflow-x: hidden;

	.location {
		display: flex;
		width: 100%;
	
		.select:first-child {
			margin-right: 5px;
		}
	}

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

	@media(max-width: 599px){
		height: 40%;
	}
`
