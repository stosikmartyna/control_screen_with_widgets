import React, { useState } from 'react';
import axios from 'axios';
import { Bars } from '../Bars/Bars.component';
import { Buttons } from '../Buttons/Buttons.component';
import { BatteryTime } from '../BatteryTime/BatteryTime.component';
import { 
    Container, 
    ControlPanelWrapper,
    NavigationWrapper,
    SwitchesWrapper,
    SwitchWrapper,
    SwitchText,
    StyledSwitch
} from './Widget.styles';

interface SingleWidget {
    name: string;
    lampIntensivity: number;
    isNightVision: boolean;
    isDuskTillDown: boolean;
    isFlashing: boolean;
}

interface WidgetProps {
    lightingMode: SingleWidget;
}

export const Widget: React.FC<WidgetProps> = ({ lightingMode }) => {
    const [lampIntensivity, setLampIntensivity] = useState<number>(lightingMode.lampIntensivity);
    const [isNightVision, setIsNightVision] = useState<boolean>(lightingMode.isNightVision);
    const [isDuskTillDown, setIsDuskTillDown] = useState<boolean>(lightingMode.isDuskTillDown);
    const [isFlashing, setIsFlashing] = useState<boolean>(lightingMode.isFlashing);

    const postData = async() => {
        try {
            const response = await axios.post('/lightmodes', { lampIntensivity, isNightVision, isDuskTillDown, isFlashing });
            console.log(response);
        } catch (error) {
            console.warn(error);
        }
    };

    const increaseLampIntensivity = () => {
        if (lampIntensivity === 0) {
            setLampIntensivity(lampIntensivity + 1)
            postData()
        } else if (lampIntensivity === 1) {
            setLampIntensivity(lampIntensivity + 2)
            postData()
        } else if (lampIntensivity === 3) {
            setLampIntensivity(lampIntensivity + 7)
            postData()
        } else if (lampIntensivity === 10) {
            setLampIntensivity(lampIntensivity + 20)
            postData()
        } else if (lampIntensivity === 30) {
            setLampIntensivity(lampIntensivity + 70)
            postData()
        } 
    };

    const decreaseLampIntensivity = () => {
        if (lampIntensivity === 100) {
            setLampIntensivity(lampIntensivity - 70)
        } else if (lampIntensivity === 30) {
            setLampIntensivity(lampIntensivity - 20)
        } else if (lampIntensivity === 10) {
            setLampIntensivity(lampIntensivity - 7) 
        } else if (lampIntensivity === 3) {
            setLampIntensivity(lampIntensivity - 2) 
        } else if (lampIntensivity === 1) {
            setLampIntensivity(lampIntensivity - 1) 
        } 
    };

    const switchIsNightVision = () => {
        setIsNightVision(!isNightVision);
    };

    const switchIsDuskTillDown = () => {
        setIsDuskTillDown(!isDuskTillDown);
    };

    const switchIsFlashing = () => {
        setIsFlashing(!isFlashing);
    };

    return (
        <Container>
            <Bars 
                lampIntensivity={lampIntensivity} 
                modeName={lightingMode.name}
            />
            <ControlPanelWrapper>
                <Buttons 
                    increaseLampIntensivity={increaseLampIntensivity}
                    decreaseLampIntensivity={decreaseLampIntensivity}
                    lampIntensivity={lampIntensivity}
                />
                <NavigationWrapper>
                    <BatteryTime />

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
                </NavigationWrapper>
            </ControlPanelWrapper>
        </Container>
    );
};