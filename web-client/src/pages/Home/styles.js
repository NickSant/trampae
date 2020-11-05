import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi'; 

export const Container = styled.div`
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f5f5f5;
`;


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

    .navItem{
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

        .profilePic{
            border-radius: 50px;
            width: 3rem;
            height: 3rem;
            margin-right: 20px;
        }

        svg {
            width: 30px;
            margin-right: 20px;
        }


        &:hover{
            background: #0b8c8a;
            cursor: pointer;
        }
        

    }
`;

export const MainContent = styled.div`
    width: 35vw;
    height: calc(100vh - 4rem);
    position: fixed;
    top: 4rem;
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar{
        display: none;
    }
`;

export const FilterContainer = styled.div`
    position: fixed;
    top: 4rem;
    right: 0;
    margin: 10px 10px 0 0;

    width: 28vw;

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
            font-size: 1.2rem;
            color: rgba(0, 0, 0, 0.7);
        }
    }

    label {
        font-size: 0.7rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
    }

    button {
        margin-top: 1rem;
        font-size: 1.2rem;
        height: 3.5rem;

    }
    

`;