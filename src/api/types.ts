import { LampIntensivity } from '../utils/types';

export interface LightSettingsDTO {
    name: string;
    lamp_intensivity: LampIntensivity;
    is_night_vision: boolean;
    is_dusk_till_down: boolean;
    is_flashing: boolean;
}