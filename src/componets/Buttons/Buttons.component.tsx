import React from 'react';
import {
    ButtonsWrapper,
    AddButton,
    BoxWithValue,
    RemoveButton
} from './Buttons.styles';

interface ButtonsProps {
    increaseLampIntensivity: () => void;
    decreaseLampIntensivity: () => void;
    lampIntensivity: number;
}

export const Buttons: React.FC<ButtonsProps> = ({ increaseLampIntensivity, decreaseLampIntensivity, lampIntensivity }) => {
    return (
        <ButtonsWrapper>
            <AddButton variant="contained" onClick={increaseLampIntensivity}>+</AddButton>
            <BoxWithValue>{lampIntensivity}%</BoxWithValue>
            <RemoveButton onClick={decreaseLampIntensivity}>-</RemoveButton>
        </ButtonsWrapper>
    );
};