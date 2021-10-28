import React from 'react';
import { Widget } from '../Widget/Widget.component';
import { Container } from './MainView.styles';

export const MainView: React.FC = () => {
    return (
        <Container>
            <Widget />
        </Container>
    );
};
