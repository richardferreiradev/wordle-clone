import React, { FC, useContext, useEffect, useState } from 'react';
import GameContext from '../global/game-context';
import './styles.css';

const attempt1 = ['T', 'A', 'S', 'D', 'F'];
const attempt2 = ['T', 'A', 'S', 'D', 'F'];
const attempt3 = ['T', 'A', 'S', 'D', 'F'];
const attempt4 = ['T', 'A', 'S', 'D', 'F'];
const attempt5 = ['T', 'A', 'S', 'D', 'F'];
const attempt6 = ['T', 'A', 'S', 'D', 'F'];

export const Square: FC = () => {
  const context = useContext(GameContext);
  const [newArray, setArray] = useState<string[]>([]);

  /**
   * There's probably a more elegant way to handle this, but this works.
   */
  useEffect(() => {
    // const answers = array.map((col, idx) => {
    //   return col.map((e, eIdx) => {
    //     if (idx === 0) {
    //       return context.attempt1![eIdx] ?? '';
    //     } else if (idx === 1) {
    //       return context.attempt2![eIdx] ?? '';
    //     } else if (idx === 2) {
    //       return context.attempt3![eIdx] ?? '';
    //     } else if (idx === 3) {
    //       return context.attempt4![eIdx] ?? '';
    //     } else if (idx === 4) {
    //       return context.attempt5![eIdx] ?? '';
    //     } else return context.attempt6![eIdx] ?? '';
    //   });
    // });
    // if (attempt === 1) {
    //   setArray(answers);
    // }
  }, [context]);

  return (
    <>
      <div className="row">
        {attempt1.map((x, idx) => {
          return <div className="letter">{context.attempt1![idx]}</div>;
        })}
      </div>
      <div className="row">
        {attempt2.map((x) => {
          return <div className="letter">{x}</div>;
        })}
      </div>

      <div className="row">
        {attempt3.map((x) => {
          return <div className="letter">{x}</div>;
        })}
      </div>

      <div className="row">
        {attempt4.map((x) => {
          return <div className="letter">{x}</div>;
        })}
      </div>

      <div className="row">
        {attempt5.map((x) => {
          return <div className="letter">{x}</div>;
        })}
      </div>

      <div className="row">
        {attempt6.map((x) => {
          return <div className="letter">{x}</div>;
        })}
      </div>
    </>
  );
};
