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
	height: 80%;
	border-radius: 10px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: center;

	.form-section {
		width: 50%;
		height: 100%;
		padding: 1rem;
		text-align: center;
		border-right: 1px solid var(--light-gray);

		h3 {
			font-size: 1.3rem;
			padding: 5px 0;
			border-bottom: 4px solid var(--primary);
		}

		span {
			font-size: 0.9rem;
			color: var(--gray);
		}

		form {
			margin-top: 1rem;

			.split-select {
				display: flex;
				align-items: center;
				justify-content: center;

				& select:first-of-type {
					width: 30%;
				}
			}

			.button {
				font-size: 1rem;
				margin-top: 3px;
			}
		}
	}

	.results {
		width: 50%;
        height: 100%;
        padding: 1rem 0;
		display: flex;
		flex-direction: column;
        justify-content: flex-start;
	}

	.user-item {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: 1s ease;
        border-radius: 10px;
        margin: 5px 0;

		div {
			display: flex;
			flex-direction: column;
			align-items: left;

			padding: 0 5px;

			strong {
				font-size: 0.7rem;
				line-height: 0.9rem;
			}

			span {
				font-size: 0.6rem;
				color: var(--gray);
			}
		}

		.profilePic {
			width: 3rem;
			height: 3rem;
			border-radius: 30px;
		}

        &:hover{
            border: 1px solid var(--light-gray);
        }
	}

    .scrollable {
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
	}
`
