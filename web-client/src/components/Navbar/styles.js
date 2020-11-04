import styled, { css } from 'styled-components';
import { FiSearch, FiHome, FiUser, FiHelpCircle, FiPhoneCall, FiUserPlus, FiLogOut } from 'react-icons/fi';


export const NavBar = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  padding: 3rem;
  position: fixed;
  z-index:1; 
  /* box-shadow: 1px 2px 7px var(--black); */
  border-bottom: 1px solid #cecece;
  background: var(--white);

  @media(max-width: 530px) {
    width: 120vw;
    height: 12vh;
  }
`;

//---Container da esquerda---//
export const ContainerLeft = styled.div`
    width: 30rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    align-items: center;
    padding: 1rem;
    
    > button {
    width: auto;
    padding: 2rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: none;
    background-color: #f0f2f5;
    color: var(--white);
    transition: background-color 0.2s;

    &:hover{
      background-color: var(--light-gray);
    }

    > p {
      color: #697078;
      font-size: 10px;

      @media(max-width: 1120px) {
      display: none;
      }
    }
  }
`;
//--Fim do container---//

//---Logo---//
export const LogoTrampae = styled.image`
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 5rem;
    height: 5rem;
    border-radius: 50%;                                                                                                                     
    background-color: var(--white);
    transition: background-color var(--gray);

    > a {

      > img {
        width: 5rem;
      }   
    }
    
    @media(max-width: 500px) {
      display: block;
      align-self: center;
    }

    @media(max-width: 300px) {
    margin-right: -10px;
    }
`;

export const Profile = styled.image`
    > a {

      img {
      width: 35px;
      border-radius: 50%;

        &:hover{
          border: 2px solid var(--white);
        }
      }
    }
`;

export const ContainerMiddle = styled.div`
    width: 45rem;
    height: 7rem;
    display: flex;
    align-items: center;   
    justify-content: space-between;
    padding: 1rem;

    @media(max-width: 530px) {
    display: none;
    }
`;

export const ContainerRight = styled.div`
    width: 30rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    align-items: center;
    padding: 1rem;

    //Botão novo serviço
    > .buttonNewService {
    width: auto;
    padding: 2rem;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    border: none;
    font-size: 15px;
    background-color: var(--primary);
    color: var(--white);
    transition: background-color 0.2s;

    &:hover{
      background-color: var(--blue);
    }
    
    > p {
      color: var(--white);
      font-size: 13px;

      @media(max-width: 1120px) {
      display: none;
      }
    }
  }
`;
//---Fim do container da direita---//

//Icone pesquisa
export const IconSearch = styled(FiSearch)`
  width: 3rem;
  height: 3rem;
  padding: 5px;
  border-radius: 50%;
  color: #697078;

  

  &:hover{
      color: var(--black);
  }

  
  @media(max-width: 1120px) {
    color: var(--black);
  }
`; 

//Icone plus de adicionar novo serviço
export const IconPlus = styled(FiUserPlus)`
  width: 3rem;
  height: 3rem;
  padding: 5px;
  border-radius: 50%;
  color: var(--white);
`; 

//---Estilo dos icones do container do meio---//
const iconCSS = css`
  width: 70px;
  height: 45px;
  padding: 1rem;
  transition: color 0.2s;
  color: #65676b;

  &:hover{
    color: var(--primary);
    border-bottom: 3px solid var(--primary);
  }

  @media(max-width: 660px) {
    display: none;
  }
`;
//---Fim do estilo dos icones---//


//---Icones do container do meio---//
export const IconHome = styled(FiHome)`
  ${iconCSS}
`;

export const IconUser = styled(FiUser)`
  ${iconCSS}
`;

export const IconHelp = styled(FiHelpCircle)`
  ${iconCSS}
`;

export const IconPhone = styled(FiPhoneCall)`
  ${iconCSS}
`;

export const IconGetOut = styled(FiLogOut)`
  ${iconCSS}
`;