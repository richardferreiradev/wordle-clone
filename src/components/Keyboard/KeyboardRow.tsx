import { FC, ReactNode } from 'react';

interface KeyboardRowProps {
  children: ReactNode;
}
export const KeyboardRow: FC<KeyboardRowProps> = ({ children }) => {
  return <div className="keyboard-row-container">{children}</div>;
};
