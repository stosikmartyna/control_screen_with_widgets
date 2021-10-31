export type LampIntensivity = 0 | 1 | 3 | 10 | 30 | 100;

export interface LightSettings {
    name: string;
    lampIntensivity: LampIntensivity;
    isNightVision: boolean;
    isDuskTillDown: boolean;
    isFlashing: boolean;
    batteryTimeLeft: number;
}