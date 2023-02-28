import { createContext, ReactNode, useState } from 'react';

interface GameProps {
  attempt1: string[];
  attempt2: string[];
  attempt3: string[];
  attempt4: string[];
  attempt5: string[];
  saveContext?: (values: GameProps) => void;
}

const defaultValues: GameProps = {
  attempt1: [],
  attempt2: [],
  attempt3: [],
  attempt4: [],
  attempt5: [],
};

const GameContext = createContext(defaultValues);

export const Provider = ({
  children,
  settings,
}: {
  children: ReactNode;
  settings: GameProps;
}) => {
  const [context, setContext] = useState(settings || defaultValues);

  const saveContext = (values: GameProps): void => {
    setContext(values);
  };

  return (
    <GameContext.Provider value={{ settings: context, saveContext }}>
      {children}
    </GameContext.Provider>
  );
};

export const GameConsumer = GameContext.Consumer;

export default GameContext;
