import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';

const Display = ({ response }) => {
  const responseList = Object.keys(response).map(keyValue => {
    return <li key={keyValue}>{keyValue}: {response[keyValue]}</li>;
  });

  return (
    <div className={styles.Display}>
      <p>{responseList}</p>
    </div>
  );
};

Display.propTypes = {
  response: PropTypes.string
};

export default Display;
