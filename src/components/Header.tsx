import React from 'react';
import './Header.css';
import './Counter';
import { Counter } from './Counter';

export const Header = () => {
  return (
    <header className="bg-primary-main px-2">
      <nav className="navbar">
        <span className="navbar__brand flex-1">React State Management</span>
        <Counter count={0} />
      </nav>
    </header>
  );
};
