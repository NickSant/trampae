import styled from "styled-components";
import patternBG from "../../assets/texture-bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: var(--white);

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media(max-width: 840px) {
    display: flex;
    flex-direction: column;
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
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);

  @media(max-width: 840px) {
    display: none;
  }

  h1 {
    margin-bottom: 60px;
    font-size: 40px;
    padding: 10px;
    border-bottom: 5px solid var(--primary);
  }

  h3 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .button {
    width: 60%;
    height: 10vh;
    margin-top: 1rem;
    border-radius: 10px;
    border: none;

    background-color: var(--primary);
    color: var(--white);

    @media(max-width: 840px) {
      display: flex;
    }
  }
`;

export const ActiveSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 2rem;

  @media(max-width: 840px) {
    display: flex;
    align-self: center;
    justify-content: center;
    background-color: var(--white);
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
    
    h1 {
      margin-left: auto;
      margin-right: 2rem;
      padding: 1rem;
      border-bottom: 2px solid var(--primary);
    
      @media(max-width: 840px) {
        display: none;
      }
    }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: 2rem;

  @media(max-width: 840px) {
    display: flex;
    align-self: center;
    padding: 2rem;
    justify-content: center;
    background-color: var(--white);
    width: 100vw;
    }

  form {
    width: 100%;
    height: 100%;
  }

  //---Div UF e Cidade---//
  .location {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;

    > .button {
    width: 60%;
    height: 10vh;
    margin-top: 1rem;
    border-radius: 10px;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    }

    @media(max-width: 840px) {
      display: flex;
      flex-direction: column;
      margin-top: -2rem;
    }
  }
`;