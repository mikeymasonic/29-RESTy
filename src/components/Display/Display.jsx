import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Display.css';

const Display = ({ response }) => {
  // const responseList = Object.keys(response).map(keyValue => {
  //   return <li key={keyValue}>{keyValue}: {response[keyValue]}</li>;
  // });

  return (
    <div className={styles.Display}>
      <ReactJson src={response} theme="monokai" name="Response" />
    </div>
  );
};

Display.propTypes = {
  response: PropTypes.string
};

export default Display;
