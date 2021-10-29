import styled from 'styled-components';

export const BarAndTextWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: [first] 25% [second] 75%;
    grid-gap: 10px;
`;

export const Text = styled.span`
    color: white;
    margin-left: 20px;
    text-transform: uppercase;
`;

export const BarsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const CompleteBar = styled.div`
    background-color: #094E95;
    border-radius: 4px;
    height: 6px;
    margin-right: 5px;
    width: 35px;
`;

export const UncompleteBar = styled.div`
    background-color: #B0B7C4;
    border-radius: 4px;
    height: 6px;
    margin-right: 5px;
    width: 35px;
`;