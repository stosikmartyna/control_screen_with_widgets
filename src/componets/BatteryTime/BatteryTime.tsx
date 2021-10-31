import React from 'react';
import {
    BatteryTimeWrapper,
    BaterryIcon,
    BatteryText
} from './BatteryTime.styles';

interface BatteryTimeProps {
    value: number
}

export const BatteryTime: React.FC<BatteryTimeProps> = ({ value }) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return (
        <BatteryTimeWrapper>
            <BaterryIcon src={'./images/battery.png'}/>
            <BatteryText>
                Time left: {hours}h {minutes}min
            </BatteryText>
        </BatteryTimeWrapper>
    );
};
