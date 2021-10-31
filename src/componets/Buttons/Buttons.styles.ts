import styled from 'styled-components';
import { Button } from '@mui/material';
import { colors } from '../../constants/colors';

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
    && {
        background-color: ${colors.lightBlue};
        border: 1px solid ${colors.lightBlue};
        color: ${colors.white};
        font-size: 3rem;

        &:hover {
            background-color: ${colors.lightBlueHover};
            border: 1px solid ${colors.lightBlueHover};
        }
    }
`;

export const BoxWithValue = styled.div`
    align-items: center;
    background-color: ${colors.widgetBackgroundBlue};
    border: 1px solid ${colors.white};
    border-radius: 4px;
    color: ${colors.white};
    display: flex;
    font-size: 1.5rem;
    height: 50px;
    justify-content: center;
`;