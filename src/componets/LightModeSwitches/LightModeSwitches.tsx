import React from 'react';
import { 
    SwitchesWrapper,
    SwitchWrapper,
    SwitchText,
    StyledSwitch
} from './LightModeSwitches.styles';

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
        <SwitchesWrapper>
            <SwitchWrapper>
                <SwitchText>Night Vision</SwitchText>
                <StyledSwitch checked={isNightVision} onChange={() => switchLightMode('isNightVision')} />
            </SwitchWrapper>
            <SwitchWrapper>
                <SwitchText>Dusk Till Down</SwitchText>
                <StyledSwitch checked={isDuskTillDown} onChange={() => switchLightMode('isDuskTillDown')} />
            </SwitchWrapper>
            <SwitchWrapper>
                <SwitchText>Flashing</SwitchText>
                <StyledSwitch checked={isFlashing} onChange={() => switchLightMode('isFlashing')} />
            </SwitchWrapper>
        </SwitchesWrapper>
    );
};