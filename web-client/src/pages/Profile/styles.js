import styled from 'styled-components'
import { FiStar, FiMapPin, FiBriefcase } from 'react-icons/fi'

export const Container = styled.div`
	width: 100vw;

	margin-top: 4rem;
	display: flex;
	justify-content: center;
`

export const ProfileInfo = styled.div`
	width: 25vw;
	height: 80vh;

	margin: 1rem 1rem 0 0;
	border-radius: 10px;
	border: 0.5px solid var(--light-gray);

	display: flex;
	flex-direction: column;
	align-items: center;

	overflow: hidden;

	.profilePic {
		width: 6rem;
		height: 6rem;
		border-radius: 30px;
		position: relative;
		top: -3rem;
	}

	.background {
		width: 100%;
		z-index: -2;
		position: relative;
		top: 0;
	}

	.profileInfo {
		width: 100%;
		margin-top: -2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		strong {
			font-size: 1.2rem;
			opacity: 0.9;
		}

		span {
			font-size: 0.9rem;
			color: var(--gray);
		}

		.bio {
			color: var(--gray);
			font-size: 0.7rem;
			line-height: 1rem;
			border-top: 1px solid var(--light-gray);
			padding: 15px 10px;
			text-align: justify;
		}

		.info-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 2.8rem;
			width: 100%;
			cursor: pointer;

			transition: ease 0.5s;

			&:hover {
				background: #c1c1c1;
			}
		}
	}
`

export const ProfileStats = styled.div`
	width: 50vw;
	height: 100%;

	.split-section {
		width: 100%;
		margin-top: 1rem;
		border: 0.5px solid var(--light-gray);
		border-radius: 10px;

		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5px 10px;

		hr {
			width: 90%;
			border: none;
			height: 1px;
			margin: 5px 0;
			background: var(--light-gray);
		}

		.item-line {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			padding: 5px 0;

			div {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				width: 49%;
				height: 3rem;
				padding: 0 5px;
				cursor: pointer;
				transition: ease 0.5s;

				span {
					font-size: 0.9rem;
				}

				&:hover {
					border-bottom: 1px solid var(--primary);
					color: var(--primary);
					fill: var(--primary);
				}
			}
		}
	}
`
