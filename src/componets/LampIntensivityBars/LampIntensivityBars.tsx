import React from 'react';
import {
    BarAndTextWrapper,
    Text,
    BarsWrapper,
    UncompleteBar,
    CompleteBar
} from './LampIntensivityBars.styles';

interface LampIntensivityBarsProps {
    lampIntensivity: number;
    modeName: string;
}

export const LampIntensivityBars: React.FC<LampIntensivityBarsProps> = ({ lampIntensivity, modeName }) => {
    const renderBars = () => {
        if (lampIntensivity === 0) {
            return (
                <>
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 1) {
            return (
                <>
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 3) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 10) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 30) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <UncompleteBar />
                </>
            )
        } else if (lampIntensivity === 100) {
            return (
                <>
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                    <CompleteBar />
                </>
            )
        }
    };

    return (
        <BarAndTextWrapper>
            <Text>{modeName}</Text>
            <BarsWrapper>
                {renderBars()}
            </BarsWrapper>
        </BarAndTextWrapper>
    );
};