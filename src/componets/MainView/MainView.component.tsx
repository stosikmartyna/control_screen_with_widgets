import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Widget } from '../Widget/Widget.component';
import { Container } from './MainView.styles';

interface Data {
    name: string;
    lampIntensivity: number;
    isNightVision: boolean;
    isDuskTillDown: boolean;
    isFlashing: boolean;
  }

export const MainView: React.FC = () => {
    const [lightingModes, setLightingModes] = useState<Data[]>();

    const getData = async() => {
        try {
            const {data} = await axios.get<Data[]>('lightingModes.json');
            setLightingModes(data);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            {lightingModes?.map((lightingMode, index) => {
                return (
                    <Widget key={index} lightingMode={lightingMode} />
                )
            })}
        </Container>
    );
};
