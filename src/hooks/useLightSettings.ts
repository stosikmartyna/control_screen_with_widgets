import { useState, useCallback } from 'react';
import { getLightSettings, putLightSettings } from '../api/api';
import { mapLightSettingsDTO } from '../utils/mappers';
import { LightSettings } from '../utils/types';

export const useLightSettings = () => {
    const [lightSettings, setLightSettings] = useState<LightSettings[]>();

    const getData = useCallback(async() => {
        try {
            const response = await getLightSettings();
            const mappedResponse = mapLightSettingsDTO(response);
            setLightSettings(mappedResponse);
        } catch (error) {
            console.warn(error);
        }
    }, []);

    const updateLightSettings = useCallback(async(name: string, values: LightSettings) => {
        try {
            await putLightSettings(name, values);
        } catch (error) {
            console.warn(error);
        }
    }, []); 

    return {
        lightSettings,
        getData,
        updateLightSettings
    }
}