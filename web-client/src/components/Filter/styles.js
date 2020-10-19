import styled, { css } from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
    background-color: var(--green);
    display: block;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    padding: 10px;
    align-items: right;
    margin: 83px 0 5rem 30px;
    width: 400px;
    height: 400px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #000;
    
    > button {
    width: 15rem;
    font-size: 15px;
    height: 4rem;
    margin: 5rem 0 0 10rem;
    border: none;
    background-color: #fff;
    border: 1px solid #14b3b0;
    border-radius: 50px;

        &:hover {
            background-color: #14b3b0;
            opacity: 0.7s;
            color: #fff;
        }

    }

    > p {
        color: #14b3b0;
        font-size: 20px;
        margin: 20px 0 0 14rem;
    }
`;

export const Title = styled.h1`
    font-size: 25px;
    margin-top: 12px;
    margin-bottom: 10px;
    color: #14b3b0;
`; 

const iconCSS = css`
    flex-shrink: 0;
    display: inline;
    margin: -3rem 0 2rem 31rem;
    width: 20px;
    height: 20px;

    &:hover{
        fill: red;
    }
`;

export const TrashIcon = styled(FiTrash2)`
    ${iconCSS}
`;

export const Select = styled.select`
    margin-top: 20px;
`; 