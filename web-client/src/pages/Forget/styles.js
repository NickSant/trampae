import styled from 'styled-components';
import patternBG from "../../assets/texture-bg.png";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  flex-direction: column;
  background-color: var(--white);
  width: 100vw;
  height: 100vh;

  @media(max-width: 840px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--secundary);
  background-image: url(${patternBG});

    > h1 {
      color: var(--white);
      font-size: 40px;
      margin-left: 2rem;
      padding: 10rem;
    }

    @media(max-width: 840px) {
     display: none;
    }   
`;

export const FormContainer = styled.div`
  background-color: var(--ice);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    width: 15rem;
    height: 15rem;
  }

  > h1 {
    color: var(--black);
    padding: 20px;
       
    @media(max-width: 460px) {
      font-size: 15px;
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 5rem;
    padding: 20px;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 10px;
    margin-top: 5rem;
    cursor: pointer;
    transition: background-color 0.2;

    &:hover{
      background-color: var(--blue);
    }
  }
`;

export const InputEmail = styled.input`
  width: 50%;
  height: 5rem;
  color: #333;
  border: none;
  border-radius: 10px;
  padding: 24px;
  transition: linear;  
    
  &:focus{
    border-left: 10px solid #14b3b0;
  }
`;

