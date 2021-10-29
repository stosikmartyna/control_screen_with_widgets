import styled from 'styled-components';
import { Switch } from '@mui/material';

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