import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
`;

export const CompleteBar = styled.div`
    background-color: ${colors.completeBarBlue};
    border-radius: 4px;
    height: 6px;
    width: 40px;
`;

export const UncompleteBar = styled(CompleteBar)`
    background-color: ${colors.uncompleteBarBlue};
`;