import { Button, Switch } from '@mui/material';
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

export const BatteryTimeWrapper = styled.div`
    align-items: center;
    background-color: #1B3C67;
    border-radius: 4px;
    color: white;
    display: flex;
    margin: 0 10px 10px 0;
    padding: 10px 5px;
`;

export const BaterryIcon = styled.img`
    margin-right: 5px;
    width: 20px;
`;

export const SwitchesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SwitchWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const SwitchText = styled.label`
    color: white;
`;

export const StyledSwitch = styled(Switch)``;