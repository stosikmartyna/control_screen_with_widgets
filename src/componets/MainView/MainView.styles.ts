import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const Container = styled.div`
    align-items: center;
    background-color: ${colors.mainBackgroundBlue};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    min-height: 100vh;
    padding: 10px;

    @media(max-width: 1200px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 769px){
        grid-template-columns: repeat(1, 1fr);
    }
`;