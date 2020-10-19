import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0 0 0;
    background-color: var(--white);
    border: 1px solid var(--light-gray);
    width: 500px;
    height: auto;
    border-radius: 4px;
    box-shadow: 1px 2px 7px var(--black);
`;

//---Informações sobre usuário---//
export const InformationsAboutUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--ice);
    width: 100%;
    height: 85px;
    padding: 1rem;

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100px;
    }
`;

export const UserImage = styled.image`
    width: 5rem;
    height: 5rem;
    
    img {
        border-radius: 50%;
        width: 5rem;
        height: 5rem;

        &:hover{
            border: 2px solid var(--white);
        }
    }
`;

export const UserName = styled.h1`
    font-size: 10px;
    color: var(--primary);
`;

export const UserCity = styled.h1`
    font-size: 8px;
    color: var(--gray); 
`;
//---Fim informações sobre usuário---//

//---Informações sobre o serviço---//
export const InforomationsAboutService = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 105px;
    padding: 1rem;
    background-color: var(--white);

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100px;
    }   
`;

//--Titulo Bico---//
export const Title = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: var(--primary);
`;

//---Descrição bico---//
export const Description = styled.div`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
    color: var(--black);
    margin-top: 2rem;
`;
//---Fiminformações sobre o serviço---//

//---Informações sobre dinheiro e número---//
export const MoneyAndNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--ice);
    width: 100%;
    height: auto;
    padding: 1rem;

    @media(max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100px;
    }   
`;

export const Money = styled.div`
    > strong {
        font-size: 15px;
        color: var(--green);
    }

    > span {
        font-size: 15px;
        color: var(--black);
    }
`;

export const ButtonWhatsApp = styled.div`

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 40px;
        padding: 5px;
        border: none;
        border-radius: 50px;  
        background-color: var(--green);
        transition: background-color 0.2s;
        
        &:hover{
            background-color: var(--dark-green); 
        }

        > img {
            width: 20px;
            height: 20px;
        }
    }

    @media(max-width: 1000px) {
        margin-top: 10px;
    }   
`;
//---Fim informações sobre dinheiro e número---//