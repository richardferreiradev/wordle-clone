import { Square } from './components/Square';
import './App.css';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="game-container">
        <Square />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
