import React, { useState } from 'react';
import { 
    Container, 
    BarAndTextWrapper,
    Text,
    BarsWrapper,
    CompleteBar,
    UncompleteBar,
    ControlPanelWrapper,
    NavigationWrapper,
    BaterryIcon,
    ButtonsWrapper,
    AddButton,
    BoxWithValue,
    RemoveButton,
    BatteryTimeWrapper,
    SwitchesWrapper,
    SwitchWrapper,
    SwitchText,
    StyledSwitch
} from './Widget.styles';

export const Widget: React.FC = () => {
    const [lampIntensivity, setLampIntensivity] = useState<number>(0);

    const increaseLampIntensivity = () => {
        if (lampIntensivity === 0) {
            setLampIntensivity(lampIntensivity + 1)
        } else if (lampIntensivity === 1) {
            setLampIntensivity(lampIntensivity + 2)
        } else if (lampIntensivity === 3) {
            setLampIntensivity(lampIntensivity + 7) 
        } else if (lampIntensivity === 10) {
            setLampIntensivity(lampIntensivity + 20) 
        } else if (lampIntensivity === 30) {
            setLampIntensivity(lampIntensivity + 70) 
        } 
    }

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
    }

    const renderBars = () => {
        if (lampIntensivity === 0) {
            return (
                <>
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 1) {
            return (
                <>
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 3) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 10) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 30) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 100) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                </>
            )
        }
    };

    return (
        <Container>
            <BarAndTextWrapper>
                <Text>THR 8</Text>
                <BarsWrapper>
                    {renderBars()}
                </BarsWrapper>
            </BarAndTextWrapper>

            <ControlPanelWrapper>
                <ButtonsWrapper>
                    <AddButton variant="contained" onClick={increaseLampIntensivity}>+</AddButton>
                    <BoxWithValue>{lampIntensivity}%</BoxWithValue>
                    <RemoveButton onClick={decreaseLampIntensivity}>-</RemoveButton>
                </ButtonsWrapper>

                <NavigationWrapper>
                    <BatteryTimeWrapper>
                        <BaterryIcon src={'./images/battery.png'}/>
                        <span>Time left</span>
                    </BatteryTimeWrapper>

                    <SwitchesWrapper>
                        <SwitchWrapper>
                            <SwitchText>Night Vision</SwitchText>
                            <StyledSwitch />
                        </SwitchWrapper>
                        <SwitchWrapper>
                            <SwitchText>Dusk Till Down</SwitchText>
                            <StyledSwitch />
                        </SwitchWrapper>
                        <SwitchWrapper>
                            <SwitchText>Flashing</SwitchText>
                            <StyledSwitch />
                        </SwitchWrapper>
                    </SwitchesWrapper>
                </NavigationWrapper>
            </ControlPanelWrapper>
        </Container>
    );
};