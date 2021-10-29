import styled from 'styled-components';

export const Container = styled.div`
    background-color: #102949;
    border-radius: 4px;
    padding: 10px 10px;

    @media(max-width: 500px) {
        min-width: 300px;
    }
`;

export const ControlPanelWrapper = styled.div`
    display: grid;
    grid-template-columns: [first] 20% [second] 80%;
    grid-gap: 10px;
`;

export const NavigationWrapper = styled.div`
    margin: 10px 0;
`;