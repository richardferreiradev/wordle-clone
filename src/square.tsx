import React, { FC, useState } from 'react';
import './App.css';

export const Square: FC = () => {
  const [value, setValue] = useState<string>('');
  const [answer, setAnswer] = useState<string[]>([]);

  const handleChange = (input: string) => {
    const newAnswer = [...answer, ...input];
    console.log(newAnswer.length);
    if (newAnswer.length === 5) return;
    setAnswer(newAnswer);
  };

  const handleKeyDown = (key: string) => {
    if (key === 'Enter') console.log(key);
  };

  return (
    <div className="input-container">
      {answer.map((x) => {
        return <span className="letter">{x?.toLocaleUpperCase()}</span>;
      })}
      <input
        type="text"
        className="input"
        onChange={(e) => handleChange(e.target.value.toUpperCase())}
        value={value}
        maxLength={5}
      />
    </div>
  );
};
