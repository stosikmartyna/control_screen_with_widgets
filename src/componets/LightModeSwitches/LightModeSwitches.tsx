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
    switchIsNightVision: () => void;
    switchIsDuskTillDown: () => void;
    switchIsFlashing: () => void;
}

export const LightModeSwitches: React.FC<LightModeSwitchesProps> = ({ lighting, switchIsNightVision, switchIsDuskTillDown, switchIsFlashing }) => {    
    const {isNightVision, isDuskTillDown, isFlashing } = lighting;
    return (
        <SwitchesWrapper>
            <SwitchWrapper>
                <SwitchText>Night Vision</SwitchText>
                <StyledSwitch checked={isNightVision} onChange={switchIsNightVision} />
            </SwitchWrapper>
            <SwitchWrapper>
                <SwitchText>Dusk Till Down</SwitchText>
                <StyledSwitch checked={isDuskTillDown} onChange={switchIsDuskTillDown} />
            </SwitchWrapper>
            <SwitchWrapper>
                <SwitchText>Flashing</SwitchText>
                <StyledSwitch checked={isFlashing} onChange={switchIsFlashing} />
            </SwitchWrapper>
        </SwitchesWrapper>
    );
};