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

  img{
    width: 8rem;
    height: 8rem;
  }

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
  height: 100%;


  > form {
    margin-top: 1rem;
    padding: 1rem;
    width: 70%;

    > button {
     margin-top: 1.2rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 5px;
  border-bottom: 5px solid var(--primary);
`;

export const ForgotPassword = styled.p`
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  margin-top: 0.6rem;  
  color: #14b3b0;
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

  div{
    width: 75%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2{
      font-size: 1.2rem;
    }

    
  }
`;
