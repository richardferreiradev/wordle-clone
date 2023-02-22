import React, { FC } from 'react';
import './App.css';

export interface SquareProps {
  letter?: string;
  isCorrect?: boolean;
  isGuess?: boolean;
}
export const Square: FC<SquareProps> = ({ isCorrect, letter, isGuess }) => {
  return (
    <div className="letter-container">
      <span className="letter">{letter?.toLocaleUpperCase()}</span>
    </div>
  );
};
