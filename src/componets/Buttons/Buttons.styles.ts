import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
    margin: 10px 0;
`;

export const AddButton = styled(Button)`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 50px;

    && {
        font-size: 3rem;
    }
`;

export const RemoveButton = styled(AddButton)`
    background-color: #CACFD9;
    border: 1px solid #CACFD9;

    && {
        background-color: #CACFD9;
        border: 1px solid #CACFD9;
        color: white;
        font-size: 3rem;

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
    border-radius: 4px;
    color: white;
    display: flex;
    font-size: 2rem;
    height: 50px;
    justify-content: center;
`;