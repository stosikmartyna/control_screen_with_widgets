import React from 'react';
import { Wrapper, Icon, Text } from './BatteryTime.styles';

interface BatteryTimeProps {
    value: number
}

export const BatteryTime: React.FC<BatteryTimeProps> = ({ value }) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return (
        <Wrapper>
            <Icon src={'./images/battery.png'}/>
            <Text>
                Time left: {hours}h {minutes}min
            </Text>
        </Wrapper>
    );
};
