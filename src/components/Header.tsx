import React from 'react';
import { useRoomContext } from '../contexts';
import { Counter } from './Counter';
import './Header.css';

export const Header = () => {
  const { roomState } = useRoomContext();
  const { count } = roomState;

  return (
    <header className="bg-primary-main px-2">
      <nav className="navbar">
        <span className="navbar__brand flex-1">React State Management</span>
        <Counter count={count} />
      </nav>
    </header>
  );
};
