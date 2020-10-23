import styled from 'styled-components';
import { FiInstagram, FiGithub, FiFacebook, FiTwitter } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--white);

        @media(max-width: 1024px) {
            display: flex;
            height: 100%;
            flex-direction: column; 
        }

        @media(min-width: 500px) {
            display: flex;
            height: 100%;
            flex-direction: column; 
        }


    
    .logoDiv {
        display:block;
        img {
            max-width: 30rem;
            height: 30rem;
            
            padding: 2rem;
        }
    }
    
`;


//-----QUEM SOMOS------//

export const ContainerPost = styled.div`
    width: 90%;
    height: 100%;
    margin-bottom: 50px;
    &:first-child{
        margin-top: 100rem !important;
    }
    text-align: center;
    background-color: var(--primary);
    /* box-shadow: 0 0 20px rgba(0, 0, 0.1); */
    border-radius: 20px;

    > h3 {
    margin-bottom: 30px;
    font-size: 2rem;
    color: var(--white);

        @media(max-width: 1024px) {
            display: flex;
            text-align: center;
            justify-content: center;
        }

        
        @media(max-width: 500px) {
            display: flex;
            text-align: center;
            justify-content: center;
        }
    }

    > p {
        padding-left: 2rem;
        padding-right: 2rem;   
        margin-bottom: 2rem;
        color: var(--ice);
        font-size: 1.8rem;
        line-height: 32px;
        text-align:justify;

        padding-left:8%;
        padding-right:8%;

        @media(max-width: 1024px) {
                display: flex;
                text-align: center;
                justify-content: center;
                font-size: 1rem;
            }

        @media(max-width: 500px) {
                display: flex;
                text-align: justify;
                font-size: 10px;
                padding-left: 5rem;
                padding-right: 3rem;   
                margin-bottom: 1rem;
        }
    }

    //REPONSIVIDADE DO CONTAINER//
    @media(max-width: 1024px) {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
                border-radius: 0;
                box-shadow: 0 0 0;
    }

    @media(max-width: 500px) {
                display: flex;
                width: 120%;
                height: auto;
                border-radius: 0;
                box-shadow: 0 0 0;
    }
`

//------FINAL NOSSOS OBJETIVOS------//


//------ICONES DOS CONTAINERS AZUIS-------//
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    color: var(--ice);
`;


//------FOOTER-----//
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
    margin-top: 20px;
    width: 100%;
    height: auto;

    > h1 {  
        color: var(--white);
        margin-left: 100px;
        margin-bottom: 30px;
        text-align: center;
        

        @media(max-width: 840px) {
            display: flex;
            justify-content: center;
            font-size: 15px;
            flex-direction: column;
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        @media(max-width: 500px) {
                display: flex;
                justify-content: center;
                font-size: 15px;
                margin-right: 9rem;
        }
    }


    //RESPONSIVIDADE DO FOOTER//
    @media(max-width: 1024px) {
            display: grid;
            width: 100%;
            flex-direction: column; 
        }

        @media(max-width: 500px) {
                display: flex;
                width: 120%; 
    }
`;
//------FINAL FOOTER------//


//-----ICONES FOOTER------//
export const IconsFooter = styled.div`
    padding: 30px;
    margin-bottom: 30px;
    color: var(--ice);
    display: flex;
    align-items: center;
    border-radius: 10px;

    > a {
        padding: 30px;
        color: var(--ice);

        &hover{
            opacity: 0.7s;
        }

        @media(max-width: 1024px) {
            display: none;
        }
    }

    //RESPONSIVIDADE DOS ICONES//
    @media(max-width: 1024px) {
            display: grid;
            align-items: center;
            justify-content: center;
            flex-direction: column; 
            padding: 10px;
            background-color: var(--black);
            color: var(--white);

            &:hover{
                    background-color: var(--black);
            }
    }
`;


//HOVER E IMPIRIQUITAÇÕES DOS ICONES SEPARADAMENTE!//
export const IconInstagram = styled(FiInstagram)`
    &:hover{
        fill: var(--black);
        color: #DD2A7B;
    }
`;
export const IconFacebook = styled(FiFacebook)`
    &:hover{
        fill: #0d8bf0;
        color: var(--white);
        border: 2px solid #0d8bf0;
        background-color: #0d8bf0;
        border-radius: 50%;
    }
`;
export const IconGitHub = styled(FiGithub)`
     &:hover{
        fill: #513976;
        color: var(--white);    
    }
`;
export const IconTwitter = styled(FiTwitter)`
     &:hover{
        fill: #0d8bf0;
        color: #0d8bf0;
    }
`;