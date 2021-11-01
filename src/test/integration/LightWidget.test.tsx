import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { LightWidget } from '../../components/LightWidget/LightWidget';
import { useLightSettings } from '../../hooks/useLightSettings';
import { LightSettings } from '../../utils/types';
import { mocked } from 'ts-jest/utils';

jest.mock('../../hooks/useLightSettings');

describe('LightWidget component', () => {
    const lightSettingsMock: LightSettings = {
        name: 'ASD 23',
        lampIntensivity: 3,
        isNightVision: true,
        isDuskTillDown: true,
        isFlashing: true,
        batteryTimeLeft: 7654,
    }

    const updateLightSettingMock = jest.fn();
    const getDataMock = jest.fn();

    beforeEach(() => {
        mocked(useLightSettings).mockReturnValue({
            lightSettings: [lightSettingsMock],
            updateLightSettings: updateLightSettingMock,
            getData: getDataMock,
        })
    })

    it('displays light widget correctly', () => {
        render(<LightWidget initialValues={lightSettingsMock} />)

        // Check components render
        screen.getByText('ASD 23');
        screen.getByRole('button', { name: '+' });
        screen.getByText('3%');
        screen.getByRole('button', { name: '-' });
        screen.getByText('Time left: 127h 34min');
    })

    it('increases lamp intensivity', () => {
        render(<LightWidget initialValues={lightSettingsMock} />)

        const increaseButton = screen.getByRole('button', { name: '+' });

        // Increase lamp intensivity once and check api PUT call
        userEvent.click(screen.getByRole('button', { name: '+' }));
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, lampIntensivity: 10});
        screen.getByText('10%')

        // Increase lamp intensivity twice
        userEvent.click(increaseButton);
        screen.getByText('30%');
        userEvent.click(increaseButton);
        screen.getByText('100%');
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, lampIntensivity: 100});
        
        // Do not call API put method when value is maximum
        expect(updateLightSettingMock).toHaveBeenCalledTimes(3);
        screen.getByText('100%');
        userEvent.click(increaseButton);
        expect(updateLightSettingMock).toHaveBeenCalledTimes(3);
        screen.getByText('100%');
    })

    it('decreases lamp intensivity', () => {
        render(<LightWidget initialValues={lightSettingsMock} />)

        const decreaseButton = screen.getByRole('button', { name: '-' });

        // Decrease lamp intensivity once and check api PUT call
        userEvent.click(decreaseButton);
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, lampIntensivity: 1});
        screen.getByText('1%')
        
        // Do not call API put method when value is minimum
        userEvent.click(decreaseButton);
        screen.getByText('0%');
        expect(updateLightSettingMock).toHaveBeenCalledTimes(2);
        userEvent.click(decreaseButton);
        screen.getByText('0%');
        expect(updateLightSettingMock).toHaveBeenCalledTimes(2);
    })

    it('switches light modes', () => {
        render(<LightWidget initialValues={lightSettingsMock} />)

        const nightVisionSwitch = screen.getAllByRole('checkbox')[0];  
        const duskTillDownSwitch = screen.getAllByRole('checkbox')[1];  
        const flashingSwitch = screen.getAllByRole('checkbox')[2];  

        // Check switches values
        expect(nightVisionSwitch).toBeChecked();
        expect(duskTillDownSwitch).toBeChecked();
        expect(flashingSwitch).toBeChecked();

        // Turn off night vision mode
        userEvent.click(nightVisionSwitch);
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, isNightVision: false});
        expect(nightVisionSwitch).not.toBeChecked();

        // Turn off dusk till down mode
        userEvent.click(duskTillDownSwitch);
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, isNightVision: false, isDuskTillDown: false });
        expect(duskTillDownSwitch).not.toBeChecked();

        // Turn off flashing mode
        userEvent.click(flashingSwitch);
        expect(updateLightSettingMock).toHaveBeenCalledWith('ASD 23', {...lightSettingsMock, isNightVision: false, isDuskTillDown: false, isFlashing: false});
        expect(flashingSwitch).not.toBeChecked();
    })
});