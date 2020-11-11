import styled from 'styled-components'

export const Container = styled.div`
	width: 14rem;
	height: 20rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 5px;
	border: 1px solid var(--light-gray);
	margin: 0 5px;
	overflow: hidden;

	img {
		width: 100%;
		height: 75%;
	}

	.infos {
		width: 100%;
		height: 10rem;
		background: var(--white);
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: ease 1s;
		padding: 1rem 0;

		.arrow {
			position: relative;
			bottom: 2.2rem;

			border-radius: 30px;
			width: 2rem;
			height: 2rem;
			background: var(--white);
			display: flex;
			justify-content: center;
			padding: 3px 0;
			transition: ease 1s;
		}

		.bottom {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: -1.6rem;
			margin-bottom: 1.5rem;

			strong {
				font-size: 1rem;
				line-height: 1.4rem;
			}

			span {
				font-size: 0.7rem;
				color: var(--gray);
			}
		}

		.links {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0 2rem;

			a {
                color: #000;
				transition: ease 1s;
                cursor: pointer;

				&:hover {
					color: var(--primary);
				}
			}
		}
	}

	&:hover {
		.infos {
			transform: translateY(-3.5rem);
		}

		.infos .arrow {
			transform: rotateX(180deg);
		}
	}
`
