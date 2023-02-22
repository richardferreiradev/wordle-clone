import { useState } from 'react';
import reactLogo from './assets/react.svg';

import { Square } from './square';
import './App.css';

function App() {
  const word = ['Z', 'E', 'L', 'D', 'A'];
  return (
    <div className="game-container">
      <div className="row">
        {word.map((x) => (
          <Square letter={x} />
        ))}
      </div>
      <div className="row">
        {word.map((x) => (
          <Square letter={x} />
        ))}
      </div>
      <div className="row">
        {word.map((x) => (
          <Square letter={x} />
        ))}
      </div>
      <div className="row">
        {word.map((x) => (
          <Square letter={x} />
        ))}
      </div>
      <div className="row">
        {word.map((x) => (
          <Square letter={x} />
        ))}
      </div>
    </div>
  );
}

export default App;
