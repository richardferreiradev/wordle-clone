import React, { FC, useState } from 'react';
import './styles.css';

const array = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const Square: FC = () => {
  return (
    <>
      {array.map((x) => {
        return (
          <div className="row">
            {x.map((y) => (
              <div className="letter"></div>
            ))}
          </div>
        );
      })}
    </>
  );
};
