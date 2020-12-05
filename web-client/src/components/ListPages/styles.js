import  {FiUser, FiHelpCircle, FiLogOut, FiPhone } from 'react-icons/fi';
import styled, { css } from 'styled-components';

export const Container = styled.div`
    background-color: var(--secundary);
    margin: 6rem 0 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const ButtonChangePage = styled.button`
    background-color: #14b3b0;
    border: 1px solid #14b3b0;
    font-size: 18px;
    margin: 2rem 0 0 2rem;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 320px;
    height: 50px;
    border-radius: 40px;
    box-shadow: 1px 1px 6px #000;

    &:hover{
        background-color: #14b3b0;
        color: #fff;
        fill: #fff;
    }
`;

const iconCSS = css`
    flex-shrink: 0;
    display: inline;
    margin: -1px 5rem 0 1rem;
    width: 20px;
    height: 20px;
`;


export const PerfilIcon = styled(FiUser)`
    ${iconCSS}
`;

export const AboutUsIcon = styled(FiHelpCircle)`
    ${iconCSS}
`;

export const LogOutIcon = styled(FiLogOut)`
    ${iconCSS}
`;  

export const TalkWithUsIcon = styled(FiPhone)`
    ${iconCSS}
`;  
