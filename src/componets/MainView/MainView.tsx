import React, { useState, useEffect } from 'react';
import { LightWidget } from '../LightWidget/LightWidget';
import { Container } from './MainView.styles';
import { LightSettings } from '../../utils/types';
import { getLightSettings } from '../../api/api';
import { mapLightSettingsDTO } from '../../utils/mappers';

export const MainView: React.FC = () => {
    const [lightSettings, setLightSettings] = useState<LightSettings[]>();

    const getData = async() => {
        try {
            const response = await getLightSettings();
            const mappedResponse = mapLightSettingsDTO(response);
            setLightSettings(mappedResponse);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            {lightSettings?.map((setting) => {
                return (
                    <LightWidget key={setting.name} initialValues={setting} />
                )
            })}
        </Container>
    );
};
