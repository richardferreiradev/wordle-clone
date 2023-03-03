import React, { FC, useContext, useEffect, useState } from 'react';
import GameContext from '../global/game-context';
import './styles.css';

const array = Array(6)
  .fill('')
  .map((row) => new Array(5).fill(''));

export const Square: FC = () => {
  const context = useContext(GameContext);
  const [newArray, setArray] = useState<string[][]>(array);

  useEffect(() => {
    const attempt1 = [...context?.attempt1];
    setArray([...array, attempt1]);
  }, [context]);

  return (
    <>
      {newArray.map((x) => {
        return (
          <div className="row">
            {x.map((y) => (
              <div className="letter">{y}</div>
            ))}
          </div>
        );
      })}
    </>
  );
};
