import { Square } from './components/Square';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard/Keyboard';
import GameContext, { GameProvider } from './global/game-context';
import { BaseSyntheticEvent, useContext } from 'react';
import './App.css';

const App = () => {
  const context = useContext(GameContext);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    console.log(e.key);
  };

  return (
    <GameProvider>
      <div
        className="container"
        tabIndex={0}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <Header />
        <div className="game-container">
          <Square />
          <Keyboard attempt={1} />
        </div>
      </div>
    </GameProvider>
  );
};

export default App;
