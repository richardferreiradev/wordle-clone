import React from 'react';

const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const third = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

export const Keyboard = () => {
  return (
    <div className="keyboard-container">
      {first.map((x) => (
        <div className="key">{x}</div>
      ))}
      {second.map((x) => (
        <div className="key">{x}</div>
      ))}
      {third.map((x) => (
        <div className="key">{x}</div>
      ))}
    </div>
  );
};
