import styled from "styled-components";
import patternBG from "../../assets/texture-bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--white);

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 200vh;
  }
`;

export const ActiveSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 15vh;
  padding: 20px;

  @media(max-width: 400px) {
    display: flex;
    align-self: center;
    justify-content: center;
  }

  @media(min-width: 399px) {
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;

  > form {
    margin-top: 1rem;
    padding: 1rem;

    > button {
      width: 100%;
      height: 10vh;
      margin-top: 1rem;
      border-radius: 10px;
      border: none;
      background-color: var(--primary);
      color: var(--white);
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  padding: 10px;
  border-bottom: 5px solid var(--primary);

  @media(max-width: 600px) {
    display: flex;
    font-size: 20px;
    margin-top: 5rem;
    line-height: 90%;
  }

  @media(min-width: 600px) {
    display: flex;
    font-size: 30px;
  }

  @media(max-width: 338px) {
    font-size: 15px;
  }
`;

export const ForgotPassword = styled.div`
  text-decoration: none;
  display: flex;
  margin-top: 3rem;  
  color: #14b3b0;

  @media(max-width: 600px) {
    display: flex;
    font-size: 20px;
    margin-top: 5rem;
    line-height: 90%;
  } 

  @media(min-width: 600px) {
    display: flex;
    font-size: 16px;
  }

  @media(max-width: 338px) {
    font-size: 15px;   
  }
`;

export const DisabledSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secundary);
  background-image: url(${patternBG});
  background-size: cover;
  color: var(--white);

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    margin-bottom: 4rem;
    font-size: 20px;
    padding: 1rem;

    @media(max-width: 600px) {
      display: flex;
      font-size: 20px;
      margin-top: 5rem;
      line-height: 90%;
    } 

    @media(min-width: 600px) {
      display: flex;
      font-size: 25px;
    }

    @media(max-width: 338px) {
      font-size: 15px;
    }
  }

    //---Botão Registre-se Já!---//
    .button {
      width: 60%;
      height: 10vh;
      margin-top: 1rem;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: var(--primary);
      color: var(--white);
    }
`;
