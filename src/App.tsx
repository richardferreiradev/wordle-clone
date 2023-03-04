import { Square } from './components/Square';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { GameProvider } from './global/game-context';
import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="container">
        <Header />
        <div className="game-container">
          <Square />
          <Keyboard />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
