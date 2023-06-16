import { FC, ReactNode } from 'react';

interface KeyboardContainerProps {
  children: ReactNode;
}

export const KeyboardContainer: FC<KeyboardContainerProps> = ({ children }) => {
  return <div className="keyboard-container">{children}</div>;
};
