import React, { FC, useContext, useEffect, useState } from 'react';
import GameContext from '../global/game-context';
import './styles.css';

// const boardTemplate = Array(6)
//   .fill('')
//   .map(() => new Array(5).fill(''));

const template = [
  ['R', 'E', 'A', 'C', 'T'],
  ['T', 'E', 'A', 'C', 'H'],
  ['S', 'T', 'U', 'D', 'Y'],
  ['K', 'O', 'O', 'P', 'A'],
  ['Z', 'E', 'L', 'D', 'A'],
  ['B', 'U', 'B', 'B', 'A'],
];

export const Square: FC = () => {
  const context = useContext(GameContext);
  const [board, setBoard] = useState<string[][]>(template);

  // useEffect(() => {
  //   if (!context) return;

  //   console.log(context.board);
  //   setBoard(context.board);
  // }, [context.board]);

  return (
    <>
      {context &&
        context.board.map((row, rowIdx) => {
          //console.log(row, rowIdx);
          return (
            <div key={rowIdx} className="row">
              {row.map((col, colIdx) => {
                //console.log(row, rowIdx, col, colIdx);
                return (
                  <div key={colIdx} className="letter">
                    {col}
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
};
