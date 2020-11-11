import styled, { css } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 4rem;

	background: var(--white);
	border-bottom: 1px solid var(--light-gray);

	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3px 20px;

	img {
		width: 4.5rem;
		margin-left: -15px;
	}

	button {
		display: none;

		@media (max-width: 599px) {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
	}
`

export const DropDown = styled.div`
	width: 100%;
	position: absolute;
	top: 4rem;
	z-index: 10;
	display: ${props => (props.active ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	padding: 1rem 0;
	background: var(--primary);

	transition: linear 1s;

	.navItem {
		width: 100%;
		height: 100%;
		margin: 5px 0;

		border-radius: 5px;
		transition: ease 0.5s;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		padding: 5px 10px;

		font-size: 1.2rem;
		font-weight: 700;
		color: var(--white);
		text-align: right;

		.profilePic {
			border-radius: 50px;
			width: 3rem;
			height: 3rem;
			margin-right: 30px;
			margin-left: 20px;
		}

		svg {
			width: 30px;
			margin-right: 30px;
			margin-left: 20px;
		}

		&:hover {
			background: #0b8c8a;
			cursor: pointer;
		}
	}
`
