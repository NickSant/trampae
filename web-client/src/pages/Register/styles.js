import styled from "styled-components";

import patternBG from "../../assets/texture-bg.png";

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: #ffff;
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
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;

  h1 {
    margin-left: auto;
    margin-right: 20px;
    padding: 10px;
    border-bottom: 2px solid #14b3b0;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 40px;

  form {
    width: 100%;
  }

  .location {
    display: flex;
    flex-direction: row;

    & select:first-of-type {
      width: 125px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  padding: 10px;
  border-bottom: 5px solid #14b3b0;
`;

export const DisabledSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121429;
  background-image: url(${patternBG});
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;

  h1 {
    margin-bottom: 60px;
    font-size: 40px;
    padding: 10px;
    border-bottom: 5px solid #14b3b0;
  }

  h3 {
    font-size: 20px;
  }

  .button {
    width: 60%;
  }
`;
