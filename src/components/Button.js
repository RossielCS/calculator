import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  color, wide, buttonName, clickEvent,
}) => (
  <button
    className={`button ${color} ${wide ? 'large' : 'small'}`}
    type="button"
    onClick={() => clickEvent(buttonName)}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  wide: PropTypes.bool.isRequired,
  buttonName: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
