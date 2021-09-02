import React from 'react';
import { HorizontalContainer, VerticalContainer } from '../components';
import { useRoomContext } from '../contexts';
import { LightBulb } from './LightBulb';
import { LightSwitch } from './LightSwitch';

export const Room = () => {
  const { roomState, setRoomState } = useRoomContext();
  const { isLightOn } = roomState;

  const handleSwitchOpened = () => {
    // @ts-ignore
    setRoomState((prevState) => ({ ...prevState, isLightOn: false }));
  };

  const handleSwitchClosed = () => {
    // @ts-ignore
    setRoomState((prevState) => ({
      ...prevState,
      isLightOn: true,
      count: prevState.count + 1,
    }));
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
        <LightBulb isOn={isLightOn} />
      </VerticalContainer>
    </HorizontalContainer>
  );
};
