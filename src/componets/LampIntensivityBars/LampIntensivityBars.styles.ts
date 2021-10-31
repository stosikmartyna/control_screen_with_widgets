import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const BarAndTextWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: [first] 35% [second] 65%;
    grid-gap: 10px;
`;

export const Text = styled.span`
    color: ${colors.white};
    margin-left: 5px;
    text-transform: uppercase;
`;

export const BarsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const CompleteBar = styled.div`
    background-color: ${colors.completeBarBlue};
    border-radius: 4px;
    height: 6px;
    margin-right: 5px;
    width: 35px;
`;

export const UncompleteBar = styled(CompleteBar)`
    background-color: ${colors.uncompleteBarBlue};
`;