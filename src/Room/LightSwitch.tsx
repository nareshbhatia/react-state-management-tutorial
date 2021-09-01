import React, { useState } from 'react';
import './LightSwitch.css';

export interface LightSwitchProps {
  onSwitchOpened: () => void;
  onSwitchClosed: () => void;
}

export const LightSwitch = ({
  onSwitchOpened,
  onSwitchClosed,
}: LightSwitchProps) => {
  const [isClosed, setClosed] = useState(false);

  const handleClick = () => {
    isClosed ? onSwitchOpened() : onSwitchClosed();
    setClosed(!isClosed);
  };

  return (
    <div
      className={`light-switch ${
        isClosed ? 'light-switch--closed' : 'light-switch--open'
      }`}
      onClick={handleClick}
    ></div>
  );
};
