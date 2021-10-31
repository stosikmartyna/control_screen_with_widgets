import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const BatteryTimeWrapper = styled.div`
    align-items: center;
    background-color: ${colors.batteryTimeBlue};
    border-radius: 4px;
    color: ${colors.white};
    display: flex;
    margin: 0 10px 10px 0;
    padding: 10px 5px;
`;

export const BaterryIcon = styled.img`
    margin-right: 5px;
    width: 20px;
`;

export const BatteryText = styled.span`
    color: ${colors.white};
`;