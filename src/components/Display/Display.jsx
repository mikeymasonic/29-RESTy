import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ response }) => {
  const responseList = Object.keys(response).map(keyValue => {
    return <li key={keyValue}>{keyValue}: {response[keyValue]}</li>;
  });

  return (
    <div>
      <p>{responseList}</p>
    </div>
  );
};

Display.propTypes = {
  response: PropTypes.string
};

export default Display;
