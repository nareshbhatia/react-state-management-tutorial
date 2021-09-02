import React from 'react';
import { Header, ViewVerticalContainer } from './components';
import { RoomContextProvider } from './contexts';
import { Room } from './Room';

export const App = () => {
  return (
    <RoomContextProvider>
      <ViewVerticalContainer>
        <Header />
        <Room />
      </ViewVerticalContainer>
    </RoomContextProvider>
  );
};
