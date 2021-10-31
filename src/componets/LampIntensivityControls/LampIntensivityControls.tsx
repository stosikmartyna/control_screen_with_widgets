import React from 'react';
import {
    ButtonsWrapper,
    AddButton,
    BoxWithValue,
    RemoveButton
} from './LampIntensivityControls.styles';

interface LampIntensivityControlsProps {
    increaseLampIntensivity: () => void;
    decreaseLampIntensivity: () => void;
    lampIntensivity: number;
}

export const LampIntensivityControls: React.FC<LampIntensivityControlsProps> = ({ increaseLampIntensivity, decreaseLampIntensivity, lampIntensivity }) => {
    return (
        <ButtonsWrapper>
            <AddButton variant={'contained'} onClick={increaseLampIntensivity}>+</AddButton>
            <BoxWithValue>{lampIntensivity}%</BoxWithValue>
            {/* minus jest krzywo w buttonie */}
            <RemoveButton onClick={decreaseLampIntensivity}>-</RemoveButton>
        </ButtonsWrapper>
    );
};