import styled, { css } from 'styled-components'

//funções css
const flexCenter = css`
    display:flex;
    justify-content:center;
    align-items:center;
`;

//components
export const Main = styled.div`
    ${flexCenter}
    width:100%;
    z-index:1000;
    background:#e16262;

    h2{
        font-family:'Ubuntu';
        font-size:30px;
        color:#fff;
    }

`;

export const Container = styled.div`
    z-index:1000;
    ${flexCenter}
    width:100vw !important;
    height:100vh !important;
    background:#cecece;
    max-width:300px;
`;