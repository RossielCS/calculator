import React from 'react';
import PropTypes from 'prop-types';

const Display = result => (
  <div>{result}</div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  result: PropTypes.string,
};

export default Display;
