import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

const buttonNames = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const orangeButtons = [
  '÷', 'x', '-', '+',
];

const ButtonPanel = () => (
  <div className="button-panel">
    {buttonNames.map(group => (
      <div key={uuidv4()} className="board-row">
        {group.map(element => {
          if (orangeButtons.includes(element)) {
            return <Button key={uuidv4()} name={element} wide={false} />;
          }
          if (element === '0') {
            return <Button key={uuidv4()} name={element} color="gray" wide />;
          }
          return <Button key={uuidv4()} name={element} color="gray" wide={false} />;
        })}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
