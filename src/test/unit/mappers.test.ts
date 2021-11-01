import '@testing-library/jest-dom/extend-expect'; 
import { LightSettingsDTO } from '../../api/types';
import { mapLightSettingsDTO } from '../../utils/mappers';
import { LightSettings } from '../../utils/types';

describe('mappers', () => {
    it('mapLightSettingsDTO', () => {
        const dataMock: LightSettingsDTO = {
            name: 'name',
            lamp_intensivity: 30,
            is_night_vision: true,
            is_dusk_till_down: true,
            is_flashing: true,
            battery_time_left: 400,
        }

        const expectedResult: LightSettings = {
            name: 'name',
            lampIntensivity: 30,
            isNightVision: true,
            isDuskTillDown: true,
            isFlashing: true,
            batteryTimeLeft: 400,
        }

        expect(mapLightSettingsDTO([dataMock])).toEqual([expectedResult]);
    })
})

