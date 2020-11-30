import styled from "styled-components"

export const Container = styled.div`
	width: 100vw;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;

	background: #f5f5f5;
`

export const SideBar = styled.div`
	width: 28vw;
	height: calc(100vh - 4rem);
	position: fixed;
	top: 4rem;
	left: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	padding: 5px 10px;

	background: var(--primary);

	.navItem {
		width: 100%;
		height: 100%;
		margin: 5px 0;

		border-radius: 5px;
		transition: ease 0.5s;

		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 10px;

		font-size: 1.2rem;
		font-weight: 700;
		color: var(--white);
		text-align: left;

		.profilePic {
			border-radius: 50px;
			width: 3rem;
			height: 3rem;
			margin-right: 20px;
		}

		svg {
			width: 30px;
			margin-right: 20px;
		}

		&:hover {
			background: #0b8c8a;
			cursor: pointer;
		}
	}

	@media (max-width: 599px) {
		display: none;
	}
`

export const MainContent = styled.div`
	width: 35vw;
	height: calc(100vh - 4rem);
	position: relative;
	top: ${props => (props.filterActive ? "25rem" : "4rem")};
	padding: 10px 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	overflow: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 599px) {
		width: 100%;
		padding: 1.5rem;
	}
`

export const FilterContainer = styled.div`
	position: fixed;
	top: 4rem;
	right: 0;
	margin: 10px 10px 0 0;

	width: 28vw;

	background: var(--white);
	border: 0.5px solid var(--light-gray);
	border-radius: 10px;
	padding: 10px;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding-bottom: 5px;
		border-bottom: 1px solid var(--light-gray);

		strong {
            line-height: 2rem;
			font-size: 1.2rem;
			color: rgba(0, 0, 0, 0.7);
		}
	}

	label {
		font-size: 0.7rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.7);
	}

	.button {
		margin-top: 1rem;
		font-size: 1.2rem;
		height: 3.5rem;
	}

	@media (max-width: 599px) {
		display: ${props => (props.filterActive ? "flex" : "none")};
		flex-direction: column;
		position: absolute;
		top: 4rem;
		width: 100%;
		height: 20rem;
		padding: 2rem 1.5rem 0 1.5rem;
		margin: 0;
		border: none;

		header {
			margin-bottom: 2rem;
		}
	}
`
