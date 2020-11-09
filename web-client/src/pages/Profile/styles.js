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
				padding: 0 10px;
				cursor: pointer;
				transition: ease 0.5s;
				border-radius: 5px;

				span {
					font-size: 0.9rem;
				}

				&:hover {
					background: #f0f0f0;
					color: var(--primary);
					fill: var(--primary);
				}
			}
		}

		.service-item {
			width: 100%;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			padding: 5px 10px;

			.votingPerson {
				width: 40%;
				display: flex;
				align-items: center;
				justify-content: left;

				div {
					display: flex;
					flex-direction: column;
					align-items: left;

					padding: 0 5px;

					strong {
						font-size: 0.9rem;
						line-height: 1.1rem;
					}

					span {
						font-size: 0.7rem;
						color: var(--gray);
					}
				}

				.profilePic {
					width: 3rem;
					height: 3rem;
					border-radius: 30px;
				}
			}

			.service-info {
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: space-between;

				strong {
					font-size: 0.9rem;
					line-height: 1.2rem;
				}

				span {
					font-size: 1.3rem;
					color: var(--yellow);
					fill: var(--yellow);
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.scrollable {
		height: 12.5rem;

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

		::-webkit-scrollbar-corner{
			border-radius: 5px;
		}
	}
`
