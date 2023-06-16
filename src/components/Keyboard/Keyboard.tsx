import { BaseSyntheticEvent, FC, useContext } from 'react';
import GameContext from '../../global/game-context';
import { KeyboardContainer } from './KeyboardContainer';
import { KeyboardRow } from './KeyboardRow';

const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const third = ['DELETE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'];

interface KeyboardProps {
  attempt: number;
}

export const Keyboard: FC<KeyboardProps> = ({ attempt }) => {
  const context = useContext(GameContext);

  const handleClick = (event: BaseSyntheticEvent) => {
    if (!context || !context.saveContext) return;
    const { saveContext, board, rowNumber, columnNumber } = context;

    const currentLetter = event.target.textContent;
    if (currentLetter === 'ENTER' && columnNumber === 4) {
      saveContext({
        board: [...context!.board],
        rowNumber: rowNumber + 1,
        columnNumber: 0,
      });
      return;
    } else if (currentLetter === 'ENTER') return;

    const letterPosition = board[rowNumber].indexOf('');

    if (letterPosition !== -1) {
      board[rowNumber][letterPosition] = currentLetter;
      saveContext({ board, rowNumber, columnNumber: letterPosition });
    }
  };

  const onEnter = () => {};

  return (
    <KeyboardContainer>
      <KeyboardRow>
        {first.map((x, idx) => (
          <div key={idx} className="key" onClick={(e) => handleClick(e)}>
            {x}
          </div>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {second.map((x, idx) => (
          <div key={idx} className="key" onClick={(e) => handleClick(e)}>
            {x}
          </div>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {third.map((x, idx) => (
          <div
            key={idx}
            className={x.length !== 1 ? 'enter-key' : 'key'}
            onClick={(e) => handleClick(e)}
          >
            {x}
          </div>
        ))}
      </KeyboardRow>
    </KeyboardContainer>
  );
};
