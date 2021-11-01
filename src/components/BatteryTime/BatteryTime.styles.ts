import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${colors.batteryTimeBlue};
    border-radius: 4px;
    color: ${colors.white};
    display: flex;
    margin-bottom: 10px;
    padding: 10px 5px;
`;

export const Icon = styled.img`
    margin-right: 5px;
    width: 20px;
`;

export const Text = styled.span``;