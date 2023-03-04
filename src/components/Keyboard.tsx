import { BaseSyntheticEvent, FC, useContext } from 'react';
import GameContext from '../global/game-context';

const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const third = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

export const Keyboard: FC = () => {
  const context = useContext(GameContext);

  /**
   * We need logic to determine what attempt we are on and what determines an attempt finish.
   */

  const handleKeyPress = (event: BaseSyntheticEvent) => {
    // if (attempt === 1) {
    //   context.saveContext!({
    //     ...context,
    //     attempt1: [...context.attempt1!, event.target.textContent],
    //   });
    // } else if (attempt === 2) {
    //   context.saveContext!({
    //     ...context,
    //     attempt2: [...context.attempt2!, event.target.textContent],
    //   });
    // } else if (attempt === 3) {
    //   context.saveContext!({
    //     ...context,
    //     attempt3: [...context.attempt3!, event.target.textContent],
    //   });
    // } else if (attempt === 4) {
    //   context.saveContext!({
    //     ...context,
    //     attempt4: [...context.attempt4!, event.target.textContent],
    //   });
    // } else if (attempt === 5) {
    //   context.saveContext!({
    //     ...context,
    //     attempt5: [...context.attempt5!, event.target.textContent],
    //   });
    // } else {
    //   context.saveContext!({
    //     ...context,
    //     attempt6: [...context.attempt6!, event.target.textContent],
    //   });
    // }
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
