import React from 'react';
import {
    BatteryTimeWrapper,
    BaterryIcon,
    BatteryText
} from './BatteryTime.styles';

export const BatteryTime: React.FC = () => {
    return (
        <BatteryTimeWrapper>
            <BaterryIcon src={'./images/battery.png'}/>
            <BatteryText>Time left</BatteryText>
        </BatteryTimeWrapper>
    );
};
