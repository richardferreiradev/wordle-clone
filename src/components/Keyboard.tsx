import React, {
  BaseSyntheticEvent,
  SyntheticEvent,
  useContext,
  useState,
} from 'react';
import { GameContext } from '../App';

const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const third = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

export const Keyboard = () => {
  const [attempt1, setKey] = useState<string>();
  const test = useContext(GameContext);

  const handleKeyPress = (event: BaseSyntheticEvent) => {
    setKey(event?.target.value);
    console.log(test);
  };

  return (
    <div className="keyboard-container">
      <div className="keyboard-row-container">
        {first.map((x) => (
          <div className="key" onClick={(e) => handleKeyPress(e)}>
            {x}
          </div>
        ))}
      </div>
      <div className="keyboard-row-container">
        {second.map((x) => (
          <div className="key">{x}</div>
        ))}
      </div>
      <div className="keyboard-row-container">
        {third.map((x) => (
          <div className={x.length !== 1 ? 'enter-key' : 'key'}>{x}</div>
        ))}
      </div>
    </div>
  );
};
