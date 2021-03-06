import React, { useEffect, useRef, useState } from 'react';
import { LampIntensivityBars } from '../LampIntensivityBars/LampIntensivityBars';
import { LampIntensivityControls } from '../LampIntensivityControls/LampIntensivityControls';
import { BatteryTime } from '../BatteryTime/BatteryTime';
import { LightModeSwitches } from '../LightModeSwitches/LightModeSwitches';
import { Wrapper, ControlPanelWrapper, LightModeWrapper, Text, WidgetHeaderWrapper } from './LightWidget.styles';
import { LampIntensivity, LightSettings } from '../../utils/types';
import { useLightSettings } from '../../hooks/useLightSettings';

interface LightWidgetProps {
    initialValues: LightSettings;
}

export const LightWidget: React.FC<LightWidgetProps> = ({ initialValues }) => {
    const [values, setValues] = useState<LightSettings>(initialValues);
    const {updateLightSettings} = useLightSettings();

    const isInitialMount = useRef(true);

    const lightName = initialValues.name.replace('_', ' ');

    const handleLampIntensivity = (mode: 'increase' | 'decrease') => {
        const lampIntensivities: LampIntensivity[] = [0, 1, 3, 10, 30, 100];
        const currentIntensivityIndex = lampIntensivities.indexOf(values.lampIntensivity);

        if (mode === 'increase' && values.lampIntensivity !== 100) {
            const updatedValue = lampIntensivities[currentIntensivityIndex + 1];
            setValues({...values, lampIntensivity: updatedValue})
        } else if (mode === 'decrease' && values.lampIntensivity !== 0) {
            const updatedValue = lampIntensivities[currentIntensivityIndex - 1];
            setValues({...values, lampIntensivity: updatedValue})
        }
    }

    const switchLightMode = (mode: 'isNightVision' | 'isDuskTillDown' | 'isFlashing') => {
        if (mode === 'isNightVision') {
            setValues({...values, isNightVision: !values.isNightVision});
        } else if (mode === 'isDuskTillDown') {
            setValues({...values, isDuskTillDown: !values.isDuskTillDown});
        } else if (mode === 'isFlashing') {
            setValues({...values, isFlashing: !values.isFlashing});
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            updateLightSettings(initialValues.name, values);
        }
    }, [initialValues.name, values, updateLightSettings]);

    return (
        <Wrapper>
            <WidgetHeaderWrapper>
                <Text>{lightName}</Text>
                <LampIntensivityBars lampIntensivity={values.lampIntensivity} />
            </WidgetHeaderWrapper>
            <ControlPanelWrapper>
                <LampIntensivityControls 
                    changeIntensivity={handleLampIntensivity}
                    lampIntensivity={values.lampIntensivity}
                />
                <LightModeWrapper>
                    <BatteryTime value={values.batteryTimeLeft} />
                    <LightModeSwitches
                        lighting={values}
                        switchLightMode={switchLightMode}
                    />
                </LightModeWrapper>
            </ControlPanelWrapper>
        </Wrapper>
    );
};