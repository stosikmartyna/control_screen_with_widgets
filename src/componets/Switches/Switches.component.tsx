import React from 'react';
import { 
    SwitchesWrapper,
    SwitchWrapper,
    SwitchText,
    StyledSwitch
} from './Switches.styles';

interface SwitchesProps {
    isNightVision: boolean;
    isDuskTillDown: boolean;
    isFlashing: boolean;
    switchIsNightVision: () => void;
    switchIsDuskTillDown: () => void;
    switchIsFlashing: () => void;
}

export const Switches: React.FC<SwitchesProps> = (
    { isNightVision, switchIsNightVision, isDuskTillDown, switchIsDuskTillDown, isFlashing, switchIsFlashing }
) => {    
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