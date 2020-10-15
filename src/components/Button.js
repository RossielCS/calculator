import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button className={`button ${color} ${wide ? 'large' : 'small'}`} type="button">{name}</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
