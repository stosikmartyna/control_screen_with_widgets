import { LightSettingsDTO } from '../api/types';
import { LightSettings } from './types';

export const mapLightSettingsDTO = (data: LightSettingsDTO[]): LightSettings[] => {
    return data.map(setting => ({
        name: setting.name,
        lampIntensivity: setting.lamp_intensivity,
        isNightVision: setting.is_night_vision,
        isDuskTillDown: setting.is_dusk_till_down,
        isFlashing: setting.is_flashing
    }))
}