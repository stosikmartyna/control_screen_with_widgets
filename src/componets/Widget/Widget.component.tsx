import React from 'react';
import { 
    Container, 
    BarAndTextWrapper,
    Text,
    BarsWrapper,
    Bar,
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
    return (
        <Container>
            <BarAndTextWrapper>
                <Text>THR 8</Text>
                <BarsWrapper>
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                    <Bar />
                </BarsWrapper>
            </BarAndTextWrapper>

            <ControlPanelWrapper>
                <ButtonsWrapper>
                    <AddButton variant="contained">+</AddButton>
                    <BoxWithValue>0%</BoxWithValue>
                    <RemoveButton>-</RemoveButton>
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