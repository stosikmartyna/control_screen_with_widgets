import React, { useEffect } from 'react';
import { LightWidget } from '../LightWidget/LightWidget';
import { Container } from './MainView.styles';
import { useLightSettings } from '../../hooks/useLightSettings';

export const MainView: React.FC = () => {
    const {lightSettings, getData} = useLightSettings();

    useEffect(() => {
        getData();
    }, [getData]);

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
