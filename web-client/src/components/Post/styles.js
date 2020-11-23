import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 5px 10px 0;

	border-radius: 5px;
	background: var(--white);
	border: 0.5px solid var(--light-gray);

	margin-bottom: 10px;

	span,
	strong {
		color: rgba(0, 0, 0, 0.7);
	}

	header {
		width: 100%;
		height: 4rem;

		display: flex;
		align-items: center;
		justify-content: space-between;

		.userInfo {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: left;

			img {
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 30px;
			}

			div {
				display: flex;
				flex-direction: column;
				padding: 0 5px;
				line-height: 1.2rem;

				strong {
					font-size: 1.1rem;
				}

				span {
					font-size: 0.6rem;
					color: var(--gray);
				}
			}
		}

		strong {
			font-size: 0.8rem;
			color: var(--primary);
			font-weight: 700;
		}
	}

	.content {
		display: flex;
		flex-direction: column;

		strong {
			font-size: 0.9rem;
			padding: 5px 0;
		}

		p {
			font-size: 0.7rem;
			color: rgba(0, 0, 0, 0.9);
			line-height: 1rem;
		}
	}

	footer {
		height: 3rem;

		margin-top: 10px;
		border-top: 1px solid var(--light-gray);

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		div,
		button {
			width: 50%;
			height: 100;
			display: flex;
			align-items: center;
			justify-content: center;

			strong {
				font-size: 0.75rem;
				transition: ease 0.5s;
			}

			span {
				font-size: 0.8rem;
				color: var(--green);
				font-weight: 700;
			}

			img {
				width: 1.8rem;
				height: 1.8rem;
				padding: 0 3px;
			}

			transition: ease 0.5s;
		}

		button:hover {
			color: var(--green);
			strong {
				color: var(--green);
			}
			img {
				fill: var(--green);
				color: var(--green);
			}
		}
	}
`
