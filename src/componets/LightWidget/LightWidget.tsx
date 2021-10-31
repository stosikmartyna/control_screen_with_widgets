import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LampIntensivityBars } from '../LampIntensivityBars/LampIntensivityBars';
import { LampIntensivityControls } from '../LampIntensivityControls/LampIntensivityControls';
import { BatteryTime } from '../BatteryTime/BatteryTime';
import { LightModeSwitches } from '../LightModeSwitches/LightModeSwitches';
import { Container, ControlPanelWrapper, NavigationWrapper } from './LightWidget.styles';
import { LightSettings } from '../../utils/types';
import { putLightSettings } from '../../api/api';

interface LightWidgetProps {
    initialValues: LightSettings;
}

export const LightWidget: React.FC<LightWidgetProps> = ({ initialValues }) => {
    const [values, setValues] = useState<LightSettings>(initialValues);

    const isInitialMount = useRef(true);

    const lightName = initialValues.name.replace('_', ' ');

    const updateLightSettings = useCallback(async() => {
        try {
            await putLightSettings(initialValues.name, values);
        } catch (error) {
            console.warn(error);
        }
    }, [initialValues.name, values]); 


    const increaseLampIntensivity = () => {
        const { lampIntensivity } = values;
        if (lampIntensivity === 0) {
            setValues({...values, lampIntensivity: 1})
        } else if (lampIntensivity === 1) {
            setValues({...values, lampIntensivity: 3})
        } else if (lampIntensivity === 3) {
            setValues({...values, lampIntensivity: 10})
        } else if (lampIntensivity === 10) {
            setValues({...values, lampIntensivity: 30})
        } else if (lampIntensivity === 30) {
            setValues({...values, lampIntensivity: 100})
        } 
    };

    const decreaseLampIntensivity = () => {
        const { lampIntensivity } = values;
        if (lampIntensivity === 100) {
            setValues({...values, lampIntensivity: 30})
        } else if (lampIntensivity === 30) {
            setValues({...values, lampIntensivity: 10})
        } else if (lampIntensivity === 10) {
            setValues({...values, lampIntensivity: 3}) 
        } else if (lampIntensivity === 3) {
            setValues({...values, lampIntensivity: 1}) 
        } else if (lampIntensivity === 1) {
            setValues({...values, lampIntensivity: 0}) 
        } 
    };

    const switchIsNightVision = () => {
        setValues({...values, isNightVision: !values.isNightVision});
    };
    
    const switchIsDuskTillDown = () => {
        setValues({...values, isDuskTillDown: !values.isDuskTillDown});
    };
    
    const switchIsFlashing = () => {
        setValues({...values, isFlashing: !values.isFlashing});
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            updateLightSettings();
        }
    }, [values, updateLightSettings]);

    return (
        <Container>
            <LampIntensivityBars 
                lampIntensivity={values.lampIntensivity} 
                modeName={lightName}
            />
            <ControlPanelWrapper>
                <LampIntensivityControls 
                    increaseLampIntensivity={increaseLampIntensivity}
                    decreaseLampIntensivity={decreaseLampIntensivity}
                    lampIntensivity={values.lampIntensivity}
                />
                <NavigationWrapper>
                    <BatteryTime />
                    <LightModeSwitches
                        lighting={values}
                        switchIsNightVision={switchIsNightVision}
                        switchIsDuskTillDown={switchIsDuskTillDown}
                        switchIsFlashing={switchIsFlashing}
                    />
                </NavigationWrapper>
            </ControlPanelWrapper>
        </Container>
    );
};