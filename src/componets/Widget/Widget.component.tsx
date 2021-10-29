import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [isNightVision, setIsNightVision] = useState<boolean>(false);
    const [isDuskTillDown, setIsDuskTillDown] = useState<boolean>(false);
    const [isFlashing, setIsFlashing] = useState<boolean>(false);
    const [lightingModes, setLightingModes] = useState();

    const getData = async() => {
        try {
            const {data} = await axios.get('lightingModes.json');
            setLightingModes(data);
            console.log(data)
        } catch (error) {
            console.warn(error);
        }
    };

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

    const switchIsNightVision = () => {
        setIsNightVision(!isNightVision);
    };

    const switchIsDuskTillDown = () => {
        setIsDuskTillDown(!isDuskTillDown);
    };

    const switchIsFlashing = () => {
        setIsFlashing(!isFlashing);
    };


    useEffect(() => {
        getData();
    }, []);

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
                            <StyledSwitch onChange={switchIsNightVision} />
                        </SwitchWrapper>
                        <SwitchWrapper>
                            <SwitchText>Dusk Till Down</SwitchText>
                            <StyledSwitch onChange={switchIsDuskTillDown} />
                        </SwitchWrapper>
                        <SwitchWrapper>
                            <SwitchText>Flashing</SwitchText>
                            <StyledSwitch onChange={switchIsFlashing} />
                        </SwitchWrapper>
                    </SwitchesWrapper>
                </NavigationWrapper>
            </ControlPanelWrapper>
        </Container>
    );
};