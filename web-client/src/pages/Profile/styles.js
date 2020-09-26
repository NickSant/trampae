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
  padding: repeat(2, 2vh 2vw);
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
  width: 50%;
  height: 100px;
  padding: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
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

  .button{
      width: 60%;
  }
`;
