import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi'; 

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: 100vh;
    width: 100%;
    background: var(--white);
`;

export const ContainerLeft = styled.div`
    background-color: var(--ice);
    margin: 6rem 0 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    @media(max-width: 1000px) {
        display: none;
    }
`;

//---Container Onde ficam os posts---//
export const ContainerMiddle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--ice);

    overflow-y: scroll;
    ::-webkit-scrollbar { 
        width: 1px;
    }

    @media(max-width: 1000px) {
        display: flex;
        width: 100vw;
    }
`;

//---Container em volta dos posts---//
export const ContainerPosts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContainerRight = styled.div`
    background-color: var(--ice);
    margin: 6rem 0 0 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    @media(max-width: 1000px) {
        display: none;
    }
`;

//---Filtro---//
export const Modal = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: #ddddddef;
    transition: 500ms;
`;

export const Filtro = styled.div`
    width: 550px;
    height: auto;
    border-radius: 10px;
    background-color: var(--white);
    border: 3px solid var(--light-gray);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--ice);
    padding: 1rem;
    border-radius: 10px;    
`;

export const IconTrash = styled(FiTrash)`
    width: 2rem;
    height: 2rem;

    &:hover{
        fill: var(--red);
        color: var(--black);
    }
`;

export const Selects = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    padding: 1rem;

    > h1 {
        color: var(--primary);
        font-size: 20px;
        margin-top: 1rem;
    }
`;

export const ButtonFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: var(--ice);

    > button {
    width: 60%;
    height: 10vh;
    margin-top: 1rem;
    border-radius: 10px;
    border: none;

    background-color: var(--primary);
    color: var(--white);

        @media(max-width: 840px) {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }   
    }
`;