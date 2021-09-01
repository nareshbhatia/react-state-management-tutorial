import React from 'react';
import './LightBulb.css';

export interface LightBulbProps {
  isOn: boolean;
}

export const LightBulb = ({ isOn }: LightBulbProps) => {
  return (
    <div
      className={`light-bulb ${isOn ? 'light-bulb--on' : 'light-bulb--off'}`}
    ></div>
  );
};
