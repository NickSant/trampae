import styled from "styled-components"

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Modal = styled.div`
	width: 70%;
	height: 85%;
	border-radius: 10px;
	background-color: white;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		font-size: 1.3rem;
		border-bottom: 3px solid var(--primary);
		padding: 5px 0;
		margin-bottom: 12px;
	}

	form .location {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 3px 0;

		& select:first-of-type {
			width: 30%;
		}
	}

	.close {
		position: fixed;
		left: 83%;
		bottom: 90%;
		border-radius: 30px;
		height: 3rem;
		width: 3rem;
		background-color: var(--primary);
		color: white;
	}
`
