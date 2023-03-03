import { createContext, ReactNode, useState } from 'react';

interface GameProps {
  attempt1: string[];
  attempt2: string[];
  attempt3: string[];
  attempt4: string[];
  attempt5: string[];
  saveContext?: (values: GameProps) => void;
}

const GameContext = createContext<GameProps | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const defaultValues: GameProps = {
    attempt1: [],
    attempt2: [],
    attempt3: [],
    attempt4: [],
    attempt5: [],
  };

  const [context, setContext] = useState<GameProps>(defaultValues);

  const saveContext = (values: GameProps): void => {
    setContext(values);
  };

  return (
    <GameContext.Provider value={{ ...context, saveContext }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
