import React from 'react';
import { 
    Container, 
    BarAndTextWrapper,
    Text,
    BarsWrapper,
    Bar,
    ButtonsWrapper,
    AddButton,
    BoxWithValue,
    RemoveButton
} from './Widget.styles';

export const Widget: React.FC = () => {
    return (
        <Container>
            <BarAndTextWrapper>
                <Text>THR 8</Text>
                <BarsWrapper>
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                </BarsWrapper>
            </BarAndTextWrapper>
            <ButtonsWrapper>
                <AddButton variant="contained">+</AddButton>
                <BoxWithValue>0%</BoxWithValue>
                <RemoveButton>-</RemoveButton>
            </ButtonsWrapper>
        </Container>
    );
};