import React from 'react';
import { HorizontalContainer, VerticalContainer } from '../components';
import { LightBulb } from './LightBulb';
import { LightSwitch } from './LightSwitch';

export const Room = () => {
  const handleSwitchOpened = () => {
    console.log('Room: Switch opened');
  };

  const handleSwitchClosed = () => {
    console.log('Room: Switch Closed');
  };

  return (
    <HorizontalContainer>
      <VerticalContainer className="justify-center items-center">
        <LightSwitch
          onSwitchOpened={handleSwitchOpened}
          onSwitchClosed={handleSwitchClosed}
        />
      </VerticalContainer>
      <VerticalContainer className="justify-center items-center bg-black ">
        <LightBulb isOn={false} />
      </VerticalContainer>
    </HorizontalContainer>
  );
};
