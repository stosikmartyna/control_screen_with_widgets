import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;

    @media(max-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 769px){
        grid-template-columns: repeat(1, 1fr);
    }
`;