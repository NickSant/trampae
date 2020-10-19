import styled from 'styled-components';

export const Container = styled.div`
    margin-top: -1px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center; 

    @media(max-width: 840px) {
        height: 5rem;
        /* width: 90vw; */
      }
`;