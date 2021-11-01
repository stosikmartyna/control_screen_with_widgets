import '@testing-library/jest-dom/extend-expect'; 
import axios from 'axios';
import { getLightSettings, putLightSettings } from '../../api/api';
import { LightSettings } from '../../utils/types';

describe('api', () => {
    it('getLightSettings', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue([]);

        await getLightSettings();
        expect(axios.get).toHaveBeenCalledWith('lightSettings.json');
    })

    it('putLightSettings', async () => {
        jest.spyOn(axios, 'put').mockResolvedValue({});

        const values: LightSettings = {
            name: 'XL_40',
            lampIntensivity: 1,
            isNightVision: true,
            isDuskTillDown: true,
            isFlashing: true,
            batteryTimeLeft: 542,
        }

        await putLightSettings('XL_40', values);
        expect(axios.put).toHaveBeenCalledWith('/light/XL_40', values);
    })
})