import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const Wrapper = styled.div`
    background-color: ${colors.widgetBackgroundBlue};
    border-radius: 4px;
    padding: 10px 10px;
    min-width: 250px;
`;

export const WidgetHeaderWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const ControlPanelWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LightModeWrapper = styled.div`
    width: 75%;
`;

export const Text = styled.span`
    color: ${colors.white};
    margin-left: 5px;
    text-transform: uppercase;
`;