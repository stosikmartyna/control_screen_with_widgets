import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #102949;
    border-radius: 3px;
    height: 200px;
    margin: 0 auto;
    padding: 10px;
    width: max-content;
`;

export const BarAndTextWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

export const Bar = styled.div`
    background-color: #094E95;
    border-radius: 3px;
    height: 6px;
    margin-right: 5px;
    width: 35px;
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
    margin: 10px 0;
    width: 20%;
`;

export const AddButton = styled(Button)`
    align-items: center;
    background-color: #2D81F6;
    border-radius: 3px;
    border: 1px solid #2D81F6;
    color: white;
    display: flex;
    font-size: 3rem;
    justify-content: center;
    height: 50px;
`;

export const RemoveButton = styled(AddButton)`
    background-color: #CACFD9;
    border: 1px solid #CACFD9;

    && {
        background-color: #CACFD9;
        border: 1px solid #CACFD9;

        &:hover {
            background-color: #b0b7c4;
            border: 1px solid #b0b7c4;
        }
    }
`;

export const BoxWithValue = styled.div`
    align-items: center;
    background-color: #102949;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    display: flex;
    font-size: 2rem;
    height: 50px;
    justify-content: center;
`;