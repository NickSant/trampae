import styled from "styled-components";
import { FiStar, FiMapPin, FiBriefcase } from 'react-icons/fi'
import CoverBG from "../../assets/cover.jpg";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--ice);

    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media(max-width: 840px) and (max-height: 840px) {
        display: flex;
        flex-direction: column;
    }
`;

//---PROFILE E COVER ---//
export const ProfilePicture = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secundary);
    background-image: url(${CoverBG});

    > img {
        width: 15rem;
        height: 15rem;
        margin-top: 2%;
        border: 3.75px solid var(--white);
        background: var(--gray);
        border-radius: 50%;
    }
`;
//---FIM DO PROFILE E COVER---//

//---NOME E DESCRIÇÃO---//
export const ProfileInformation = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--ice);
    justify-content: center;
    margin-bottom: 1rem;

    > h1 {
        color: var(--black);
        text-align: center;
        padding: 1rem;
        font-weight: bold;
        
    }

    p {
        color: var(--gray);
        text-align: center;
        padding: 1rem;
        
    }
`;
//---FIM DO NOME E DESCRIÇÃO---//

//---INFORMAÇÕES---//
export const InformationsAboutPerson = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 2rem;

    //ICONE DO WHATS
     img {
        width: 50px;
        height: 50px;
        padding: 1rem;
        border-radius: 8px;
        background-color: var(--green);
    }

    > div{
        display: flex;
        align-items: center;
        strong, span{
            margin-left:5px;
        }
    }

     strong, span {
        font-size: 16px;
        margin-bottom: 1px;
        color: var(--gray);
        margin: 1rem 0 1rem 0;
    }
`;
//---FIM DAS INFORMAÇÕES---//

//---BICOS---//
export const Bicos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 70vw;
    height: auto;
    margin: 2rem auto 0 auto;
    border-radius: 10px;
    border:1px solid #cecece;
    background: var(--white);
`;

//--TITULO DOS BICOS---//
export const Title = styled.h1`
    color: var(--black);
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    /* margin-left: 2%; */
`;

//---ICONE ESTRELA---//
export const Stars = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StarIcon = styled(FiStar)`
    display: flex;
    flex-direction: row;
    width: 40px;
    height: 40px;
    padding: 1rem;
    fill: var(--yellow);
    color: var(--yellow);
`;

//---ICONE MAP POINT ---//
export const IconLocation = styled(FiMapPin)`
    width: 50px;
    height: 50px;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--orange);
`;

//---ICONE MALA ---//
export const IconJob = styled(FiBriefcase)`
     width: 50px;
    height: 50px;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--purple);

`;