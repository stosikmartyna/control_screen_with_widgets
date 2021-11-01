import React from 'react';
import {
    Wrapper,
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
        <Wrapper>
            <AddButton variant={'contained'} onClick={increase}>+</AddButton>
            <BoxWithValue>{lampIntensivity}%</BoxWithValue>
            <RemoveButton onClick={decrease}>-</RemoveButton>
        </Wrapper>
    );
};