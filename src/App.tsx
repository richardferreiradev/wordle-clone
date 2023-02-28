import { createContext, useState } from 'react';
import { Square } from './components/Square';
import './App.css';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';

const defaultValues: GameProps = {
  attempt1: [],
  attempt2: [],
  attempt3: [],
  attempt4: [],
  attempt5: [],
};

export const GameContext = createContext(defaultValues);

interface GameProps {
  attempt1: string[];
  attempt2: string[];
  attempt3: string[];
  attempt4: string[];
  attempt5: string[];
}

function App() {
  const [context, setContext] = useState(defaultValues);
  return (
    <GameContext.Provider value={context}>
      <div className="container">
        <Header />
        <div className="game-container">
          <Square />
          <Keyboard />
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
