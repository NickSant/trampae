import  { FiPhone, FiMail } from 'react-icons/fi';

import styled, {css} from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;  
    /* padding-left:5%;
    padding-right:5%; */
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--ice);

    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    //Horizontal Line//
    > hr {
        height: 2px;
        background-color: var(--light-gray);
    }

    //---Icone Whatsapp---//
    > img {
        width: 90%;
        height: 15rem;
        align-self: center;
        margin-bottom: 2rem;
        padding: 5rem;
        border-radius: 10px;
        margin-top: 2rem;
        background-color: var(--green);
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover{
        background-color: #3eb54a;
        border: 1px solid var(--gray);
        }
    }
`;


export const Social = styled.div`
    h3{

    }
`

//---Container por volta de tudo---//
export const ContainerBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    padding: 8rem;
    width: 100%;
    height: 100%;
    background-color: var(--ice);

    //LandingImg
    > img {
        margin-top:1rem;
        max-width: 50rem;
        max-height: 50rem;
        

        @media(max-width: 780px) {
            display: flex;
            margin-top: 10rem;
            width: 40rem;
            height: 40rem;
        }
    }

    //RESPONSIVIDADE DO CONTAINER
    @media(max-width: 780px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    color: var(--primary);
    font-size: 50px;

    @media(max-width: 780px) {
        display: flex;
        margin-top: 2rem;
        text-align: center;
        font-size: 40px;
    }
`;

//Estilo dos icones
const iconCSS = css`
    width: 90%;
    height: 15rem;
    align-self: center;
    margin-bottom: 2rem;
    padding: 5rem;
    border-radius: 10px;
    cursor: pointer;
`;

//---Icone Email---//
export const IconEmail = styled(FiMail)` 
    ${iconCSS}
    background-color: var(--gmail);
    transition: background-color 0.2s;

    &:hover{
        background-color: #de4231;
        border: 1px solid var(--gray);
    }  
`;

//---Icone Telefone---//
export const IconPhone = styled(FiPhone)`
    ${iconCSS}
    background-color: var(--blue);
    transition: background-color 0.2s;
    
    &:hover{
        background-color: var(--primary);
        border: 1px solid var(--gray);
    }
`;