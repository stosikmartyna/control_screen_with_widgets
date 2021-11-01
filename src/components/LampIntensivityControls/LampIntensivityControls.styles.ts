import styled from 'styled-components';
import { Button } from '@mui/material';
import { colors } from '../../utils/constants/colors';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
`;

export const AddButton = styled(Button)`
    height: 50px;

    && {
        font-size: 3rem;
    }
`;

export const RemoveButton = styled(AddButton)`
    && {
        background-color: ${colors.lightBlue};
        color: ${colors.white};
        padding-bottom: 10px;

        &:hover {
            background-color: ${colors.lightBlueHover};
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