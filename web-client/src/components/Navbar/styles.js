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
		width: 15rem;
    height: 3rem;
    
    font-size: 14px;
	}
`
