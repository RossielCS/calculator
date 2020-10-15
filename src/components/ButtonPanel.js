import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

const buttonNames = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
  <div>
    {buttonNames.map(group => (
      <div key={uuidv4()} className="board-row">
        {group.map(element => (
          <Button key={uuidv4()} name={element} />
        ))}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
