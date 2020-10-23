import styled from 'styled-components';
import patternBG from "../../assets/texture-bg.png";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--white);

      @media(max-width: 840px) {
        display: flex;
        flex-direction: column;
      }
`;

export const DisabledSection = styled.div`
  width: 50%;
  height: 105vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
  background-color: var(--secundary);
  background-image: url(${patternBG});
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);

  h1 {
    margin-bottom: 60px;
    font-size: 40px;
    padding: 10px;
    border-bottom: 5px solid var(--primary);
  }

  @media(max-width: 840px) {
    display: none;
  }
`;

export const ActiveSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  padding: 5rem;
  background-color: var(--white);

    @media(max-width: 840px) {
      display: flex;
      align-self: center;
      justify-content: center;
      width: 100vw;
    }

    @media(max-width: 399px) {
      display: flex;
      align-self: center;
      justify-content: center;
    }

    @media(max-width: 280px) {
      img {
        display: flex;
        margin-right: 2rem;
        }
    }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  padding: 3rem;
      
  > button {
    width: 100%;
    height: 10vh;
    margin-top: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    transition: background-color 0.2s;

    &:hover{
      background-color: var(--blue);
    }
  }

  > a {
    width: 100%;
    height: 10vh;
    margin-top: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    transition: background-color 0.2s;

    &:hover{
      background-color: var(--blue);
    }

  }
      
    @media(max-width: 840px) {
      display: block;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }

    @media(max-width: 399px) {
      display: block;
      align-items: center;
      justify-content: center;
    } 

`;

