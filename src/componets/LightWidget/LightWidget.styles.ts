import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const Container = styled.div`
    background-color: ${colors.widgetBackgroundBlue};
    border-radius: 4px;
    padding: 10px 10px;
    min-width: 250px;
`;

export const ControlPanelWrapper = styled.div`
    display: grid;
    grid-template-columns: [first] 20% [second] 80%;
    grid-gap: 10px;
`;

export const NavigationWrapper = styled.div`
    margin: 10px 0;
`;