import React from 'react';
import PropTypes from 'prop-types';
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

const keyList = [
  'ed4b', 'fd9c', '62b6', '47c7', 'ad30',
];

const ButtonPanel = ({ handleClick }) => (
  <div className="button-panel">
    {buttonNames.map((group, i) => (
      <div key={`row${keyList[i]}`} className="board-row">
        {group.map(element => {
          if (orangeButtons.includes(element)) {
            return <Button key={`btn${element}`} buttonName={element} wide={false} handleClick={handleClick} />;
          }
          if (element === '0') {
            return <Button key={`btn${element}`} buttonName={element} color="gray" wide handleClick={handleClick} />;
          }
          return <Button key={`btn${element}`} buttonName={element} color="gray" wide={false} handleClick={handleClick} />;
        })}
      </div>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
