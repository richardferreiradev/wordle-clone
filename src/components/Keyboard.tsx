import { BaseSyntheticEvent, FC, useContext } from 'react';
import GameContext from '../global/game-context';

const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const third = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

interface KeyboardProps {
  attempt: number;
}

export const Keyboard: FC<KeyboardProps> = ({ attempt }) => {
  const context = useContext(GameContext);
  const handleKeyPress = (event: BaseSyntheticEvent) => {
    context?.saveContext!({
      ...context,
      attempt1: [...context.attempt1, event.target.textContent],
    });
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
          <div className="key" onClick={(e) => handleKeyPress(e)}>
            {x}
          </div>
        ))}
      </div>
      <div className="keyboard-row-container">
        {third.map((x) => (
          <div
            className={x.length !== 1 ? 'enter-key' : 'key'}
            onClick={(e) => handleKeyPress(e)}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};
