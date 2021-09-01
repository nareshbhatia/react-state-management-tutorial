import React from 'react';
import './Counter.css';

export interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return <div className="counter">{count}</div>;
};
