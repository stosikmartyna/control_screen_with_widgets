import styled from 'styled-components';
import { Switch } from '@mui/material';

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