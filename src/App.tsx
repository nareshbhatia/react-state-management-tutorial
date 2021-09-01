import React from 'react';
import { Header, ViewVerticalContainer } from './components';
import { Room } from './Room';

export const App = () => {
  return (
    <ViewVerticalContainer>
      <Header />
      <Room />
    </ViewVerticalContainer>
  );
};
