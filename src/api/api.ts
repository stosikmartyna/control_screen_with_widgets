import axios from 'axios';
import { LightSettings } from '../utils/types';
import { LightSettingsDTO } from './types';

export const getLightSettings = async () => {
    const {data} = await axios.get<LightSettingsDTO[]>('lightSettings.json');
    return data;
}

export const putLightSettings = async (name: string, values: LightSettings) => {
    await axios.put(`/light/${name}`, values);
}