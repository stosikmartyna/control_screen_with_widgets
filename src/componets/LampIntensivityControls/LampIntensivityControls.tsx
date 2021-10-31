import React from 'react';
import {
    ButtonsWrapper,
    AddButton,
    BoxWithValue,
    RemoveButton
} from './LampIntensivityControls.styles';

interface LampIntensivityControlsProps {
    changeIntensivity: (mode: 'increase' | 'decrease') => void;
    lampIntensivity: number;
}

export const LampIntensivityControls: React.FC<LampIntensivityControlsProps> = ({ changeIntensivity, lampIntensivity }) => {
    const increase = () => {
        changeIntensivity('increase')
    }

    const decrease = () => {
        changeIntensivity('decrease')
    }

    return (
        <ButtonsWrapper>
            <AddButton variant={'contained'} onClick={increase}>+</AddButton>
            <BoxWithValue>{lampIntensivity}%</BoxWithValue>
            {/* minus jest krzywo w buttonie */}
            <RemoveButton onClick={decrease}>-</RemoveButton>
        </ButtonsWrapper>
    );
};