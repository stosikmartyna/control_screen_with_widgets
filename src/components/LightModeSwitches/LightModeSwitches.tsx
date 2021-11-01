import React from 'react';
import { Wrapper, Text } from './LightModeSwitches.styles';
import { Switch } from '@mui/material';

interface LightModeSwitchesProps {
    lighting: {
        lampIntensivity: number;
        isNightVision: boolean;
        isDuskTillDown: boolean;
        isFlashing: boolean;
    }
    switchLightMode: (mode: 'isNightVision' | 'isDuskTillDown' | 'isFlashing') => void;
}

export const LightModeSwitches: React.FC<LightModeSwitchesProps> = ({ lighting, switchLightMode }) => {    
    const {isNightVision, isDuskTillDown, isFlashing } = lighting;
    return (
        <>
            <Wrapper>
                <Text>Night Vision</Text>
                <Switch checked={isNightVision} onChange={() => switchLightMode('isNightVision')} />
            </Wrapper>
            <Wrapper>
                <Text>Dusk Till Down</Text>
                <Switch checked={isDuskTillDown} onChange={() => switchLightMode('isDuskTillDown')} />
            </Wrapper>
            <Wrapper>
                <Text>Flashing</Text>
                <Switch checked={isFlashing} onChange={() => switchLightMode('isFlashing')} />
            </Wrapper>
        </>
    );
};